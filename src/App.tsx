import './App.css'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import USPCarousel from './components/USPCarousel'

function App() {

  return (
    <>
      <Hero />
      <div className="page-content-wrapper">
        <ProductShowcase />
        <USPCarousel />
      </div>
    </>
  )
}

export default App
