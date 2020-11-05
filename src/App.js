import { useState } from 'react';
import './App.scss';


function Button(props) {
  return (
  <button id={props.idx} onClick={props.onClick}>{props.name}</button>
  )
}

function App() {
  const [number, setNumber] = useState(0)
  const [oldNumber, setOldNumber] = useState('')
  const [wynik, setWynik] = useState('')

  const nothing = () =>{
    return;
  }

  const clear = () =>{
    setNumber(0)
    setOldNumber('')
    setWynik('')
  }

  const putNumber = (newNumber) =>{
    if(newNumber == '+' || newNumber == '-' || newNumber == '/' || newNumber =='*' || number == '+' || number == '-' || number == '/' || number =='*'){
      setNumber(newNumber)
      oldNumber ? setOldNumber(oldNumber + `${newNumber}`) : setOldNumber(newNumber)
      
    }else{
      number ? setNumber(number + `${newNumber}`) : setNumber(newNumber) 
    oldNumber ? setOldNumber(oldNumber + `${newNumber}`) : setOldNumber(newNumber)
    }
    /*typeof(newNumber) == 'number' ? number ? setNumber(number + `${newNumber}`) : setNumber(newNumber) : setNumber(newNumber)
    
  //  number ? setNumber(number + `${newNumber}`) : setNumber(newNumber) 
    oldNumber ? setOldNumber(oldNumber + `${newNumber}`) : setOldNumber(newNumber)
 */
  }
//eval - zsumuje stringa :D
  const operations = (operator) => {
    setNumber(operator)
    setOldNumber(oldNumber + `${operator}`)
  }

  const calculate = () => {
    setOldNumber('')
    setWynik(eval(oldNumber))
    console.log(wynik)
  }
  return (
    <div id="calculator" className="calc">
      <div className="upper-displayer">
      <div>{wynik}</div>
      <div>{oldNumber}</div>
      </div>
      <div id="display">{number}</div>
      <Button idx="clear" name="AC" size="2" onClick={clear}/>
      <Button idx="divide" name="/" size="1" onClick={() => putNumber('/')}/>
      <Button idx="multiply" name="x" size="1" onClick={() => putNumber('*')}/>
      <Button idx="seven" name="7" size="1" onClick={() => putNumber(7)}/>
      <Button idx="eight" name="8" size="1" onClick={() => putNumber(8)}/>
      <Button idx="nine" name="9" size="1" onClick={() => putNumber(9)}/>
      <Button idx="subtract" name="-" size="1" onClick={() => putNumber('-')}/>
      <Button idx="four" name="4" size="1" onClick={() => putNumber(4)}/>
      <Button idx="five" name="5" size="1" onClick={() => putNumber(5)}/>
      <Button idx="six" name="6" size="1" onClick={() => putNumber(6)}/>
      <Button idx="add" name="+" size="1" onClick={() => putNumber('+')}/>
      <Button idx="one" name="1" size="1" onClick={() => putNumber(1)}/>
      <Button idx="two" name="2" size="1" onClick={() => putNumber(2)}/>
      <Button idx="three" name="3" size="1" onClick={() => putNumber(3)}/>
      <Button idx="equals" name="=" size="2" onClick={calculate} />
      <Button idx="zero" name="0" size="2" onClick={() => putNumber(0)}/>
      <Button idx="decimal" name="." size="1" onClick={nothing}/>
    </div>
  );
}

export default App;
