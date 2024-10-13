import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 bg-red-600 rounded-full text-white shadow-lg"
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 bg-green-500 rounded-full text-white shadow-lg"
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 bg-blue-600 rounded-full text-white shadow-lg"
          >Blue</button>
         <button
          onClick={() => setColor("purple")}
          className="ou tline-none px-4 py-1 bg-purple-600 rounded-full text-white shadow-lg"
          >purple</button>
         <button
          onClick={() => setColor("black")}
          className="ou tline-none px-4 py-1 bg-black rounded-full text-white shadow-lg"
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
