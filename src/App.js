import { useState } from 'react';
import './App.scss';


function Button(props) {
  return (
  <button id={props.idx} onClick={props.onClick}>{props.name}</button>
  )
}

function App() {
  const [result, setResult] = useState(0)

  const nothing = () =>{
    return;
  }

  const clear = () =>{
    setResult(0)
  }

  const putNumber = (number) =>{
    result ? setResult(result + `${number}`) : setResult(number) 
  }
  return (
    <div id="calculator" className="calc">
      <div id="display">{result}</div>
      <Button idx="clear" name="AC" size="2" onClick={clear}/>
      <Button idx="divide" name="/" size="1" onClick={nothing}/>
      <Button idx="multiply" name="x" size="1" onClick={nothing}/>
      <Button idx="seven" name="7" size="1" onClick={() => putNumber(7)}/>
      <Button idx="eight" name="8" size="1" onClick={() => putNumber(8)}/>
      <Button idx="nine" name="9" size="1" onClick={() => putNumber(9)}/>
      <Button idx="subtract" name="-" size="1" onClick={nothing}/>
      <Button idx="four" name="4" size="1" onClick={() => putNumber(4)}/>
      <Button idx="five" name="5" size="1" onClick={() => putNumber(5)}/>
      <Button idx="six" name="6" size="1" onClick={() => putNumber(6)}/>
      <Button idx="add" name="+" size="1" onClick={nothing}/>
      <Button idx="one" name="1" size="1" onClick={() => putNumber(1)}/>
      <Button idx="two" name="2" size="1" onClick={() => putNumber(2)}/>
      <Button idx="three" name="3" size="1" onClick={() => putNumber(3)}/>
      <Button idx="equals" name="=" size="2" onClick={nothing} />
      <Button idx="zero" name="0" size="2" onClick={() => putNumber(0)}/>
      <Button idx="decimal" name="." size="1" onClick={nothing}/>
    </div>
  );
}

export default App;
