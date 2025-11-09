import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Benefits from './components/Benefits'
import './App.css'

function App() {

  return (
    <div className='page-contents-full-container'>
      <Navbar />
      <Hero />
      <Capabilities />
      <Benefits />
    </div>
  )
}

export default App
