import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'

import './hero.css'

function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
    <div className="hero" ref={ref}>
    <h3 className='hero-title'  style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
      }}>JWILIMITED</h3>
    <div className="hero-text">
      <span style={{
        paddingTop: isInView ? "0" : "64px",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s",
      }}>Electrify your</span>
      <span style={{
        paddingTop: isInView ? "0" : "64px",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s",
      }}> space,</span>
      <span style={{
        paddingTop: isInView ? "0" : "64px",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.2s",
      }}> Illuminate your </span>
      <span style={{
        paddingTop: isInView ? "0" : "64px",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.6s",
      }}>world</span>
    </div>
    
    <div className="scroll-down"  style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
      }}>
      <span className="scroll">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="#ffffff" viewBox="0 0 256 256"><path d="M200,28a12,12,0,0,0-12,12v62l-113.45-71A20,20,0,0,0,44,47.88V208.12A20,20,0,0,0,74.55,225L188,154v62a12,12,0,0,0,24,0V40A12,12,0,0,0,200,28ZM68,200.73V55.27L184.3,128Z"></path></svg>
      </span>
      Who we are
    </div>
    </div>

    </>
  )
}

export default Hero