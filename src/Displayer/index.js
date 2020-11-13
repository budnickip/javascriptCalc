import React from 'react';
import './index.scss';

function Displayer(props){
    return(
      <div className="displayer">
        <div className="upper-displayer">{props.oldNumber}</div>
        <div id="display" className="lower-displayer">{props.wynik ? props.wynik : props.number}</div>
      </div>
    )
  }

  export default Displayer