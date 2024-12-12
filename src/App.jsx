import { useState } from 'react'
import './App.css'
import Review from './pages/review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Review/>
    </>
  )
}

export default App
