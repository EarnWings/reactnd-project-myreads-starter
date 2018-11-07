import React, { Component } from 'react';
import App from './App';
import Book from './Book';
import BookList from './BookList';
import Shelf from './Shelf';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      shelvedBooks: this.props.shelvedBooks
    }
  }

  render() {
  	return (
  		<div className="book-shelf-changer">
		  <select value={this.props.book.shelf || "none"} onChange={(event) => {this.props.onUpdateBook(this.props.book, event.target.value)}}>
		    <option value="move" disabled>Move to...</option>
		    <option value="currentlyReading">Currently Reading</option>
		    <option value="wantToRead">Want to Read</option>
		    <option value="read">Read</option>
		    <option value="none">None</option>
		  </select>
		</div>
  	)
  }
}
 
export default Dropdown
