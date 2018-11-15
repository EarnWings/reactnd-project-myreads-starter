import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI.js';

class SearchBooks extends Component {
  state = {
    books: [], 
    query: '',
    //shelf: []
  }

  searchBooks = (query) => {
    if (!query || (query === '') || (query == undefined)) {
      this.setState({ books: [] })
    } else {
      BooksAPI.search(query).then((book) => {
        if (query === this.state.query) {
          if(!book.length) {
            this.setState({ books: [] })
          } else {
            this.setState({ books: book })
          }
        }
      })
    }
  }

  updateQuery(query) {
    this.setState({ query });
    this.searchBooks(query);
  }

  clearQuery = () => {
    this.setState({ query:'' })
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search books"
              
              onChange={(event) => {this.updateQuery(event.target.value)}}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book =>
              <Book updateBook = {this.props.updateBook} book={book} key={book.id} {...book} />)
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks