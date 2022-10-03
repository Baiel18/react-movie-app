import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detailpage from "./pages/Detailpage";
import Home from "./Home"

function App() {
 return(
  <>
  <header>
    <div className="containerNav">
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/movie">Movie</Link>
      <Link className="nav" to="/about">About</Link>
      <Link className="nav" to="/contact">Contact</Link>
    </div>
  </header>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movie" element={<Homepage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/movie/:id" element={<Detailpage/>}/>
  </Routes>
  </>
 )
}

export default App;