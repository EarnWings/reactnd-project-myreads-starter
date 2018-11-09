import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './BookList';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';
import * as BookUtils from './BookUtils';

class BooksApp extends Component {
  state={ 
    books: []
  }

  componentDidMount = () => {
    if (this.state.newbook) {
      this.updateBooks();
    }
  }

  updateBooks = () => {
    BooksAPI
      .getAll()
      .then((list) => {
        this.setState({
          books: BookUtils.sortAllBooks(list),
          newBook: false
        });
      });
  }

  changeShelf = (book, shelf) => {
    //make the call to the service to update the shelf for the selected 
    //book to the newly selected shelf
    BooksAPI
      .update(book, shelf)
      .then(response => {
        //update the state of the book. Start with a copy of the list of books
        let newList = this
          .state
          .books
          .slice(0);
        //look for the book in the list - it might not be there yet
        const books = newList.filter(listBook => listBook.id === book.id);
        if (books.length) {
          //update the book that's already on the shelf
          books[0].shelf = shelf;
        } else {
          //add the book to the shelf and sort the list of books again
          newList.push(book);
          newList = BookUtils.sortAllBooks(newList);
        }
        //update the state with the new list
        this.setState({books: newList});
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <BookList 
            books={this.state.books}
            onUpdateBook={this.updateBooks}
            onChangeShelf={this.changeShelf}
          />
        )}/>
	      <Route path="/add-a-book" render={() => (
          <SearchBooks 
            selectedBooks={this.state.books} 
            onUpdateBook={this.updateBooks}
            onChangeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
