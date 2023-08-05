import { useState, useRef } from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Main } from '../components/main/main'
import one from "../assets/one.webp";
import two from "../assets/two.webp"
import three from "../assets/three.webp"
import four from "../assets/four.webp"
import { useScroll, motion, useInView } from "framer-motion"
import { useEffect } from 'react';
import { ContactHome } from '../components/contactHome/contactHome'
import ScrollToTopOnMount from './scrollTo';




function Services() {

  const headerRef = useRef(null)
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const fourthRef = useRef(null)

  const firstView = useInView(firstRef, { once: true })
  const secondView = useInView(secondRef, { once: true })
  const thirdView = useInView(thirdRef, { once: true })
  const fourthView = useInView(fourthRef, { once: true })


  return (
    <>
      <ScrollToTopOnMount></ScrollToTopOnMount>
      <Header></Header>
      <Main background={one} title={"SERVICES"}></Main>
      <section className="services">
        <div className="services-inner">
          <div className="service-item service-first" ref={firstRef}>
            <div className="service-image"
            style={{
              opacity: firstView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
              backgroundImage: `url(${one})`,
            }}
            ></div>
            <div className="service-text"
            style={{
              opacity: firstView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
            >
              <h5 className="service-title">Installations and Upgrades</h5>
              <p className="services-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nulla vero explicabo reprehenderit. Fugiat eligendi, impedit eaque nihil voluptate omnis laboriosam ratione praesentium ipsa adipisci laborum ea vero recusandae dolores.</p>

            </div>
          </div>
          <div className="service-item service-second" ref={secondRef}>
          <div className="service-text"
          style={{
            opacity: secondView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          >
              <h5 className="service-title">Repairs and Maintenance</h5>
              <p className="services-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nulla vero explicabo reprehenderit. Fugiat eligendi, impedit eaque nihil voluptate omnis laboriosam ratione praesentium ipsa adipisci laborum ea vero recusandae dolores.</p>

            </div>
            <motion.div className="service-image"
            style={{
              opacity: secondView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              backgroundImage: `url(${two})`,
            }}
            ></motion.div>

          </div>
          <div className="service-item service-third" ref={thirdRef}>
            <div className="service-image"
            style={{
              opacity: thirdView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              backgroundImage: `url(${three})`,
            }}
            ></div>
            <div className="service-text"
            style={{
              opacity: thirdView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
            >
            <h5 className="service-title">Energy Efficient Solutions</h5>
            <p className="services-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nulla vero explicabo reprehenderit. Fugiat eligendi, impedit eaque nihil voluptate omnis laboriosam ratione praesentium ipsa adipisci laborum ea vero recusandae dolores.</p>

            </div>
          </div>
          <div className="service-item service-fourth" ref={fourthRef}>
          <div className="service-text"
          style={{
            opacity: fourthView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          >
            <h5 className="service-title">Safety Inspections</h5>
              <p className="services-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nulla vero explicabo reprehenderit. Fugiat eligendi, impedit eaque nihil voluptate omnis laboriosam ratione praesentium ipsa adipisci laborum ea vero recusandae dolores.</p>
            </div>
            <div className="service-image" 
            style={{
              opacity: fourthView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              backgroundImage: `url(${four})`,
            }}
            ></div>
          </div>
        </div>
      </section>
      <ContactHome></ContactHome>
      <Footer></Footer>
    </>
  )
}

export default Services 