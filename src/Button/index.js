import React from 'react';

function Button(props) {
    return (
    <button id={props.idx} onClick={props.onClick}>{props.name}</button>
    )
  }
export default Button