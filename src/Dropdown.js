import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
  	shelfSelection: this.props.book.shelf || 'none'
  }

  onUpdateBook = (book, shelf) => {
  	//set the state for the shelf selection and make the call back up the chaim
  	this.setState({shelfSelection: shelf});
  	this
  		.props
  		.onUpdateBook(book, shelf);
  }

  componentWillReceiveProps = (props) => {
  	this.props = props;
  	this.setState({shelfSelection: this.props.book.shelf});
  }

  render = () => {
  	return (
  		<div className="book-shelf-changer">
		  <select 
		  	value={this.state.shelfSelection} 
		  	onChange={(event) => this.onUpdateBook(this.props.book, event.target.value)}>
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
 
export default Dropdown;
