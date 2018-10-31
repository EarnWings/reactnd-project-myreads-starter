import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookList from './BookList.js';
import SearchBooks from './SearchBooks.js';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
state=({ 
  books: [] 
})

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(bk => bk.id !== book.id).concat([ book ])
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <BookList updateBook = {this.updateBook}/>
        )}/>
	      <Route path="/add-a-book" render={() => (
          <SearchBooks updateBook = {this.updateBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
