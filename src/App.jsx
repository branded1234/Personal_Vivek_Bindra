import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Card from './components/Card/Card'
import Work from './components/Work/Work'
import Learning from './components/Learning/Learning'
import Stats from './components/Stats/Stats'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Card />
      <Work />
      <Learning />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
