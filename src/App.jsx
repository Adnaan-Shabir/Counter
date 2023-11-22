import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const addValue = () =>{
    if (counter >= 20) {
      setCounter(20) 
      alert("Maximun limit reached : 20")
    }else{
      setCounter(counter + 1)
    }
  }
  const removeValue = () =>{
    if (counter <= 0) {
      setCounter(0) 
      alert("Negative numbers not allowed")
    }else{
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Hooks</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value : {counter}</button>
    </>
  );
}

export default App;
