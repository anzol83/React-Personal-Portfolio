import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/projects'
import About from './components/About'
import Blogs from './components/Blogs'
import GoToTop from './components/GoToTop'

function App() {

  return (
    
    <>   
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/project" element={<Projects/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/blogs" element={<Blogs/>} ></Route>
        </Routes>
        <GoToTop/>
        <Footer/>
    </>
  )
}

export default App
