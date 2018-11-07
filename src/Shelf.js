import React, { Component } from 'react';
import Book from './Book.js';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books
    }
  }

  render() {
    let addBooks = (book) => {
      return (<Book onUpdateBook={this.props.onUpdateBook} shelvedBooks={this.props.shelvedBooks} book={book} key={book.id} books={this.props.books} {...book} />)
    }

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {this.props.name} </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(addBooks)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
