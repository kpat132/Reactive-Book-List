import React from 'react';

const BookListItem = ({ title, author }) => {
  return(
    <div className="book">
      <div>Title: { title }</div>
      <div>Author: { author }</div>
    </div>
  )
}

export default BookListItem;