import React, { Component } from 'react';
import App from './App';
import Dropdown from './Dropdown';

class Book extends Component {
  state = {
    shelfSelection: this.props.book.shelf || 'none'
  }

  render() {
    //join the array of authors to create a single author string
    const authors = this.props.book.authors && this
      .props
      .book
      .authors
      .join(' | ');

      //create thumbnail url
      let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

    return(
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: url
              }}
            >  
            </div>
            <Dropdown 
              book={this.props.book} 
              onUpdateBook={this.props.onUpdateBook} 
              onChangeShelf={this.props.onChangeShelf}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
    )
  }
}

export default Book
