import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class BookList extends Component {
  state = {}

  componentDidMount = () => {
    //update list of all books
    this
      .props
      .onUpdateBook();
  }

  updateShelves = () => {
    //Update the state of individual shelves to contain the 
    //appropriate books for each shelf
    const newCurrent = {
      name: "Currently Reading",
      books: this
        .props
        .books
        .filter(book => book.shelf === 'currentlyReading')
    };
    const newWant = {
      name: "Want to Read",
      books: this
        .props
        .books
        .filter(book => book.shelf === 'wantToRead')
    };
    const newRead = {
      name: "Read",
      books: this
        .props
        .books
        .filter(book => book.shelf === 'read')
    };

    return ([newCurrent, newWant, newRead]);
  }

  render() {
    let shelves = [];
      if (this.props.books && this.props.books.length) {
        shelves = this.updateShelves();
      }

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves && shelves.map((shelf) => (<Shelf
            key={shelf.name} 
            shelf={shelf} 
            onUpdateBook={this.props.onUpdateBook}
            onChangeShelf={this.props.onChangeShelf}
          />))}
        </div>
        <div className="open-search">
          <Link to="/add-a-book">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList
