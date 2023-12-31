import { useState } from 'react'
import Home from './routes/Home'
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Services from "./routes/Services"
import About from "./routes/About"
import Projects from "./routes/Projects"
import Gallery from './routes/Gallery';
import Contact from "./routes/Contact"
import {SanityDataProvider}  from "./context/FetchContext"

function App() {

  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Throttle the scroll function with a maximum of 200ms frequency
window.addEventListener('scroll', throttle(throttle, 200));
  return (
    <>
      <SanityDataProvider >
      <HashRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>

      </Routes>
      </HashRouter>
      </SanityDataProvider >
    </>
  )
}

export default App
