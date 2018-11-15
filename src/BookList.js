import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf.js';
import * as BooksAPI from './BooksAPI.js';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books => {
      this.setState ({ books })
    }))
  }

  render() {
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Object.keys(shelves).map((shelf) =>
            <Shelf key={shelf}
              updateBook ={this.props.updateBook}
              name = {shelves[shelf][0]}
              books = {this.state.books.filter(bk => bk.shelf === shelves[shelf][1])} />
          )}
        </div>
        <div className="open-search">
          <Link to="/add-a-book">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList