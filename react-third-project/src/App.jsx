import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1);
  
  const addValue = () =>{
        setCounter(counter + 1);
        console.log(counter);
  }

  const removeValue = () => {
        setCounter(counter - 1);
  }

  return (
    <>
     <h1>Mohit aur Shubham</h1>
     <h2 >Counter value is: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value</button>       
    </>
  )
}

export default App
