import React, {useState} from 'react'
import "./App.css"

export default function App() {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <h1>React Counter</h1>
      <h2>{number}</h2>
      <div className="counter">
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={() => setNumber(number - 1)}>Decrease</button>
      <button onClick={() => setNumber(0)}>Reset</button>
      </div>
    </div>
  )
}
