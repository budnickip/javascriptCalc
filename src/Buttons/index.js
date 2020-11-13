import React from 'react';
import './index.scss';
import Button from '../Button'

function Buttons(props) {
    return(
      <div className="buttons">
        <Button idx="clear" name="AC" size="two" onClick={props.clear}/>
        <Button idx="divide" name="/" size="one" onClick={()=> props.operations('/')}/>
        <Button idx="multiply" name="x" size="one" onClick={() => props.operations('*')}/>
        <Button idx="seven" name="7" size="one" onClick={() => props.putNumber(7)}/>
        <Button idx="eight" name="8" size="one" onClick={() => props.putNumber(8)}/>
        <Button idx="nine" name="9" size="one" onClick={() => props.putNumber(9)}/>
        <Button idx="subtract" name="-" size="one" onClick={() => props.operations('-')}/>
        <Button idx="four" name="4" size="one" onClick={() => props.putNumber(4)}/>
        <Button idx="five" name="5" size="one" onClick={() => props.putNumber(5)}/>
        <Button idx="six" name="6" size="one" onClick={() => props.putNumber(6)}/>
        <Button idx="add" name="+" size="one" onClick={() => props.operations('+')}/>
        <Button idx="one" name="1" size="one" onClick={() => props.putNumber(1)}/>
        <Button idx="two" name="2" size="one" onClick={() => props.putNumber(2)}/>
        <Button idx="three" name="3" size="one" onClick={() => props.putNumber(3)}/>
        <Button idx="equals" name="=" size="two" onClick={props.calculate} />
        <Button idx="zero" name="0" size="two" onClick={() => props.putNumber(0)}/>
        <Button idx="decimal" name="." size="one" onClick={() => props.putNumber('.')}/>
      </div>
    )
  }

export default Buttons