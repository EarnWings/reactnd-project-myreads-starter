import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import * as BookUtils from './BookUtils'

class SearchBooks extends Component {
  state = {
    books: [],
    query: '',
  }

  updateQuery(query) {
    this.setState({ query });
    this.searchBooks(query);
  }

  clearQuery = () => {
    this.setState({ query:'' })
  }

  searchBooks = (query) => {
    if (!query || (query === '') || (query === undefined)) {
      this.setState({ books: [] })
    } else {
      if (query === this.state.query) {
        BooksAPI
          .search(query)
          .then(response => {
            let newList = [];
            if (response.length) {
              newList = BookUtils.mergeShelvesAndSearch(this.props.selectedBooks, response);
              newList = BookUtils.sortAllBooks(newList);
            }
            this.setState({ books: newList });
          })
      }
    }
  }

  componentWillReceiveProps = (props) => {
    this.props = props;
    let newList = BookUtils.mergeShelvesAndSearch(this.props.selectedBooks, this.state.books);
    newList = BookUtils.sortAllBooks(newList);
    this.setState({ books: newList });
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
              <li key={book.id}>
                <Book onUpdateBook={this.props.onUpdateBook} onChangeShelf={this.props.onChangeShelf} />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
