import { useState } from 'react'
import Intro from './components/intro/Intro'
import Topbar from './components/topbar/Topbar'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './app.scss'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App
