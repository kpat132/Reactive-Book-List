import React from 'react';

class AppTitleComponent extends React.Component {
  render() {
    return (
      <AppChildComponent
      title='TITLE GOES HERE' />
    );
  }
}

class AppChildComponent extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

export default AppTitleComponent;
