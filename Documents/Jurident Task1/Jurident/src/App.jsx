import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Landing/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
