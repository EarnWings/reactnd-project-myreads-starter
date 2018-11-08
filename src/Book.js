import React, { Component } from 'react';
import App from './App';
import Dropdown from './Dropdown';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      shelvedBooks: this.props.shelvedBooks
    }
  }

  render() {
    return(
      <li key = {this.props.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img alt={this.props.title} src={this.props.imageLinks ? this.props.imageLinks.smallThumbnail : ''}></img>
            </div>
            <Dropdown book={this.props.book} shelvedBooks={this.props.shelvedBooks} onUpdateBook={this.props.onUpdateBook} />
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
