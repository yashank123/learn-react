import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  //let counter = 0;

  return (
    <>
      <h1>Yashank ke projects!</h1>

      <h2>Counter value: {counter}</h2>

      <button
      onClick = {() => {
        //counter++;
        if(counter <20){
          setCounter(counter+1)
        }
        
      }} 
      >Add value</button>

      <button
      onClick = {() =>{

        if(counter>0){
          setCounter(counter-1)
        }
        
      }}
      >Remove value</button>
    </>
  )
}

export default App
