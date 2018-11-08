import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './BookList.js';
import SearchBooks from './SearchBooks.js';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state=({ 
    books: [],
    shelvedBooks: this.props.books
  })

  updateBook = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(response => {
        let newList = this
          .state
          .books
          .slice(0);
        const books = newList.filter(listBook => listBook.id === book.id);
        if (books.length) {
          books[0].shelf = shelf;
        } else {
          newList.push(book);
        }
        this.setState({ books: newList });
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <BookList 
            books={this.state.books}
            onUpdateBook={this.updateBook}
            shelvedBooks={this.state.shelvedBooks}
          />
        )}/>
	      <Route path="/add-a-book" render={() => (
          <SearchBooks 
            books={this.state.books} 
            onUpdateBook={this.updateBook}
            shelvedBooks={this.state.shelvedBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
