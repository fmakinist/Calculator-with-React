import { useState } from "react";
import * as math from 'mathjs'
import ButtonElement from "./components/ButtonElement";
import './app.css'
import Input from "./components/Input";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("")

const addToText=(value)=>{
  setText((text)=>[...text,value ])
}

const deleteInput=()=>{
  setResult("");
  setText("");
}

const calculateResult=()=>{
  const input=text.join("")
  setResult(math.evaluate(input))
  console.log(result)
}

  return (
    <div className="App">
    <div className="calculateWrapper">
      <Input text={text} result={result}/>
      <div className="row">
      <ButtonElement symbol="%" color={"#FF9500"} handleClick={addToText}/>
      <ButtonElement symbol="-" color={"#FF9500"} handleClick={addToText}/>
      <ButtonElement symbol="/" color={"#FF9500"} handleClick={addToText}/>
      <ButtonElement symbol="+" color={"#FF9500"} handleClick={addToText}/>
      </div>
     
      <div className="row">
      <ButtonElement symbol="7" handleClick={addToText}/>
      <ButtonElement symbol="8" handleClick={addToText}/>
      <ButtonElement symbol="9" handleClick={addToText}/>
      <ButtonElement symbol="*" color={"#FF9500"} handleClick={addToText}/>
      </div>
      <div className="row">
      <ButtonElement symbol="4" handleClick={addToText}/>
      <ButtonElement symbol="5" handleClick={addToText}/>
      <ButtonElement symbol="6" handleClick={addToText}/>
      <ButtonElement symbol="=" color={"#FF9500"} handleClick={calculateResult}/>
      </div>
      <div className="row">
      <ButtonElement symbol="1" handleClick={addToText}/>
      <ButtonElement symbol="2" handleClick={addToText}/>
      <ButtonElement symbol="3" handleClick={addToText}/>
      <ButtonElement symbol="." color={"#FF9500"} handleClick={addToText}/>

      </div>
      <div className="row">
      <ButtonElement symbol="0" handleClick={addToText}/>
      
      </div>
      <ButtonElement symbol={"Clear"} color={"#FF9500"} handleClick={deleteInput}/>
    </div>
    
    </div>
  );
}

export default App;
