import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='page-contents-full-container'>
      <Navbar />
      <Hero />
      <Capabilities />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
