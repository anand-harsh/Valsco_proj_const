import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Op from './components/Op'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/projects' exact element={<Op/>}/>
        <Route path='/services' exact element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
