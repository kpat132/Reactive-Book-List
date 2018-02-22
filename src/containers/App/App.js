import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import NameTag from '../../components/NameTag';
import BookList from '../../components/BookList';
import BookListAppTitle from '../../components/BookListAppTitle'

import { getBooksFromFakeXHR } from '../../lib/books.db';
// import {addBookToFakeXHR as addBook} from '../lib/books.db';
// import {getBookByIdFromFakeXHR as getBookById} from '../lib/books.db';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      filter: ''

    }
  }

  handleOnChangeEvent(event) {
    this.setState({filter: event.target.value});
  }


  componentDidMount() {
    getBooksFromFakeXHR()
      .then(result => {
        console.log('BOOKLIST', result)
        this.setState({
          book: result
        })
      })
  }


  render() {
    return (
      <div className="App">
        <div className='BookListAppTitle'>
          <BookListAppTitle />
        </div>
        <div className='BookFilterInput'>
          <input type='text'
            value={this.state.filter}
            onChange={this.handleOnChangeEvent.bind(this)}
          />
        </div>
        {this.state.filter}
        <NameTag name="Book Title" />
        <BookList books={this.state.book} />

      </div>
    );
  }
}



export default App;