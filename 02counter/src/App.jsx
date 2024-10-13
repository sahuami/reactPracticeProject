import { useState } from 'react'

import './App.css'

function App() {

  let [count, setCount] = useState(0)

  let addValue = () => {
    setCount(count + 1)


  }
  



  let removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1> MY value: {count}</h1>
      <button onClick={addValue}> ADD VALUE</button>
      <button onClick={removeValue}> REMOVE VALUE</button>


    </>
  )
}

export default App
