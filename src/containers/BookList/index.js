////////////////////////////////////////BookList Index/////////////////////////////////
import React from 'react';
import BookListItem from '../../components/BookListItem';

const BookList = ({ books, findBook }) => {
  return (
    <div>
      {books.filter(book => {
        return (
          book.title.toLowerCase().indexOf(findBook.toLowerCase()) !== -1 ||
          book.author.toLowerCase().indexOf(findBook.toLowerCase()) !== -1
        );
      })
        .map((book) => {
          return (
            <BookListItem
              key={book._id}
              title={book.title}
              author={book.author}
            />)
        }
        )
      }
    </div>
  )
}
export default BookList;