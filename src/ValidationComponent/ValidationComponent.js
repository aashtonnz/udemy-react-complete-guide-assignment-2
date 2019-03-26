import React from 'react';

const validationComponent = (props) => {
  const MIN_LENGTH = 5;
  let message = props.inputText.length >= MIN_LENGTH ? 'Text Long Enough' : 'Text Too Short';
  return <p>{message}</p>;
}

export default validationComponent;