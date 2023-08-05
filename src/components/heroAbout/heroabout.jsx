import { useState } from 'react'
import {Link} from "react-router-dom"
import './heroabout.css'

function HeroAbout() {
  return (
    <>
      <div className="hero-about" id="about">
        <div className="ha-left">
          <h3>Illuminate Your <br /> World with JWILIMITED</h3>
          <p>Let us be your partner in harnessing the power of electricity to propel your success. Whether you're building a new structure, renovating an existing space, or seeking energy-efficient solutions, we have the knowledge and expertise to turn your vision into reality.</p>
          <Link to="/about"><button className="about-btn">About us</button></Link>
        </div>
        <div className="ha-right">
        </div>
      </div>
    </>
  )
}

export default HeroAbout