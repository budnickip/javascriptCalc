import { useState } from 'react';
import './App.scss';
import Displayer from './Displayer'
import Buttons from './Buttons'



function App() {
  const [number, setNumber] = useState(0)
  const [oldNumber, setOldNumber] = useState('')
  const [wynik, setWynik] = useState('')
  const [evaluate, setEvaluate] = useState(false)


  const clear = () =>{
    setNumber(0)
    setOldNumber('')
    setWynik('')
  }
  

  const putNumber = (newNumber) =>{
    setWynik('')
    if(newNumber == '.'){
      if(number.toString().indexOf('.') == -1){
        number ? setNumber(number + `${newNumber}`) : setNumber(newNumber) 
        oldNumber ? setOldNumber(oldNumber + `${newNumber}`) : setOldNumber(newNumber)
      }
    }else if( number == '+' || number == '-' || number == '/' || number =='*'){
      setNumber(newNumber)
      oldNumber ? setOldNumber(oldNumber + `${newNumber}`) : setOldNumber(newNumber)
      
    }else{
      number ? setNumber(number + `${newNumber}`) : setNumber(newNumber) 
    oldNumber ? setOldNumber(oldNumber + `${newNumber}`) : setOldNumber(newNumber)
    }
  }
  const operations = (operator) => {
    if(evaluate){
      setEvaluate(false)
      console.log(wynik)
      setOldNumber(wynik + operator)
    }
    setNumber(operator)
    if(operator == '-' && oldNumber.length == 0 ){
      setOldNumber(operator)
    }
    if(oldNumber.length == 0){
      return;
    }else if(operator == '-' && oldNumber[oldNumber.length-1] == '-') {
      setOldNumber(oldNumber.slice(0,oldNumber.length-1) + '+')
      return;
     }else if(operator == '-' &&(oldNumber[oldNumber.length-1] == '+'|| oldNumber[oldNumber.length-1] == '*' || oldNumber[oldNumber.length-1] == '/' )){
      setOldNumber(oldNumber + `${operator}`)
     }
    else if(oldNumber[oldNumber.length-1] == '+'|| oldNumber[oldNumber.length-1] == '*' || oldNumber[oldNumber.length-1] == '/' || oldNumber[oldNumber.length-1] == '-'  ){
      if(oldNumber[oldNumber.length-2] == '+' || oldNumber[oldNumber.length-2] == '*' || oldNumber[oldNumber.length-2] == '/'){
        setOldNumber(oldNumber.slice(0,oldNumber.length-2) + operator)
      }else{
        setOldNumber(oldNumber.slice(0,oldNumber.length-1) + operator)
      }

    }else{
      setOldNumber(oldNumber + `${operator}`)
    }
  }

  const calculate = () => {
    setWynik(eval(oldNumber))
    setEvaluate(true)
    setOldNumber(wynik)
  }
  
  return (
    <div id="calculator" className="calc">
      <Displayer oldNumber={oldNumber} wynik={wynik} number={number}/>
      <Buttons clear={clear} operations={operations} putNumber={putNumber} calculate={calculate}/>
    </div>
  );
}

export default App;
