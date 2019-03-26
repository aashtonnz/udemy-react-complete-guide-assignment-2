import React from 'react';

const charComponent = (props) => {
  const style = {
    border: '1px solid black',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    display: 'inline-block'
  }
  return <h1 style={style} onClick={props.remove}>{props.char.toUpperCase()}</h1>;
}

export default charComponent;