import React from 'react';

class ParentContainer extends React.Component {
  render() {
    return (
      <BookListAppTitle title = 'TITLE GOES HERE'/>
    );
  }
}

class BookListAppTitle extends React.Component {
  render() {

    return (
      <h1>{this.props.title}</h1>
    );
  }
}

export default ParentContainer;