import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Amit",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username = {myObj.username} />
    </>
  )
}

export default App
