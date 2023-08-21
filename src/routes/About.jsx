import { useState, useRef } from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Main } from '../components/main/main'
import background from "../assets/electric1.webp"
import { ContactHome } from '../components/contactHome/contactHome'
import ScrollToTopOnMount from './scrollTo';
import { useInView } from 'framer-motion'
import { useSanityData } from '../context/FetchContext'


function About() {

  const aboutTextRef = useRef(null)
  const aboutTextView = useInView(aboutTextRef, { once: true })
  const sanityData = useSanityData();



  return (
    <>
    <ScrollToTopOnMount></ScrollToTopOnMount>
      <Header></Header>
      <Main background={background} title="ABOUT US"></Main>
      <div className="about-container" ref={aboutTextRef}
      style={{
          opacity: aboutTextView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}>
        <p className="about-text" >
        {sanityData.result && sanityData.result[0].aboutText1}
        </p>
        <p className="about-text">
        {sanityData.result && sanityData.result[0].aboutText2}
         </p>
      </div>
      <ContactHome></ContactHome>
      <Footer></Footer>
    </>
  )
}

export default About
