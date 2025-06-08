import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <ProductShowcase />
    </>
  )
}

export default App
