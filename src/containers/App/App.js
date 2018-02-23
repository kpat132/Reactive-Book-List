import React, { Component } from 'react';
import './App.css';
import AppTitleComponent from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import NewBookForm from '../NewBookForm/index';
import BookList from '../Booklist/index';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], search: '' }
  }

  componentDidMount() {
    getBooksFromFakeXHR().then(result => {
      this.setState({ books: result })
    })
  }

  addBook(book) {
    let newBook = {
      title: book.title,
      author: book.author
    }

    addBookToFakeXHR(newBook).then(result => {
      this.setState({ books: result });
    })
  }

  searchInput(event) {
    const found = event.target.value;
    this.setState({ search: found })
  }

  render() {
    return (
      <div className="App">

        <AppTitleComponent />

        <BookFilterInput searchInput={this.searchInput.bind(this)} />

        <div className="BookListContainer">
          <BookList books={this.state.books} findBook={this.state.search} />
        </div>
        
        <div className="NewBookFormContainer">
          <NewBookForm addNew={this.addBook.bind(this)} />
        </div>

      </div>
    );
  }
}

export default App;
