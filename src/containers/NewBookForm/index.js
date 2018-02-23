import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '' };

    this.handleOnTitle = this.handleOnTitle.bind(this);
    this.handleOnAuthor = this.handleOnAuthor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleOnAuthor(event) {
    this.setState({ author: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .addNew({ title: this.state.title, author: this.state.author })
    this.setState({ title: '', author: '' })
  }

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleOnTitle}
          />
          <input type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.handleOnAuthor}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBookForm;