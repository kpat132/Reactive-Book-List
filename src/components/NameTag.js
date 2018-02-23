import React from 'react';

export default ({name}) => {
  //props
  // const name = props.name;

  name = name.toUpperCase();
  return (
    <h3>{`>>>>${name}`}</h3>
  );
};