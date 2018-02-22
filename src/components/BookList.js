import React from 'react';
import BookListItem from './BookListItem'

const BookList = ({ books, bookList }) => {

  return (
    <div className="book-list-container">
      {

        // books.filter((book) => {
         
        //     book.title.toLowerCase().indexOf(bookList.toLowerCase()) > -1 ||
        //     book.author.toLowerCase().indexOf(bookList.toLowerCase()) > -1

        // })
          books.map((book, index) => {
            return (
              <BookListItem key={index} book={book} />
            )
          })

      }

    </div>
  )
}

export default BookList;

