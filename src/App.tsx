import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
			<>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
				<p>直前の修正</p>
			</>
  )
}

export default App
