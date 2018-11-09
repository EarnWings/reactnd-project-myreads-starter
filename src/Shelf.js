import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  state = {}

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {this.props.shelf.name} </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this
              .props
              .shelf
              .books
              .map(book => (
                <li key={book.id}>
                  <Book 
                    book={book}
                    onUpdateBook={this.props.onUpdateBook}
                    onChangeShelf={this.props.onChangeShelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
