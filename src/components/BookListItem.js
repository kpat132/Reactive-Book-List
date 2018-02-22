import React from 'react';

const BookListItem = ({ book }) => {

  return (
      <div className="book-item">
        <div> {book.title} </div>
        <div> {book.author} </div>
      </div> 
  )
}

export default BookListItem;