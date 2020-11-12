import React from 'react';
import './index.scss';

function Button(props) {
    return (
    <button className={props.idx} id={props.idx} onClick={props.onClick}>{props.name}</button>
    )
  }
export default Button