import React from "react"
import Header from "./Components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style.css'
import Home from "./Components/Home"

function App() {
  return (
    <BrowserRouter>
    <Header />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
    </BrowserRouter>
  )

}

export default App
