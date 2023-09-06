import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Op from './components/Op'
import Services from './components/Services'
import Switcher from './Switcher'
import { Home } from './components/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Switcher/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/project' exact element={<Project/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/projects' exact element={<Op/>}/>
        <Route path='/services' exact element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
