import { useState } from 'react'
import {Link} from "react-router-dom"
import './heroabout.css'
import { useSanityData } from '../../context/FetchContext'

function HeroAbout() {
  const sanityData = useSanityData();
  return (
    <>
      <div className="hero-about" id="about">
        <div className="ha-left">
          <h3>{sanityData && sanityData.result && sanityData.result[0].secondSectionTitle}</h3>
          <p>{sanityData && sanityData.result && sanityData.result[0].secondSectionText}</p>
          <Link to="/about"><button className="about-btn">About us</button></Link>
        </div>
        <div className="ha-right">
        </div>
      </div>
    </>
  )
}

export default HeroAbout