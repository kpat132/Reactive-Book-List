import React from 'react';

const BookFilterInput = ({ searchInput }) => {
  return(
    <div>
      <br/>
      <input type="text"
      name="search"
      placeholder="search"
      onChange={ searchInput }/>
      <br/>
      <br/>
    </div>
  )
}

export default BookFilterInput;