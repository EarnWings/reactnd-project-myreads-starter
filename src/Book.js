import React, { Component } from 'react';

class Book extends Component {
  render() {
    return(
      <li key = {this.props.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img alt= {this.props.title} src={this.props.imageLinks ? this.props.imageLinks.smallThumbnail : ''}></img>
            </div>
            <div className="book-shelf-changer">
              <select value = {this.props.book.shelf || "none"} onChange={(event) => {this.props.updateBook(this.props.book, event.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
