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
import imageUrlBuilder from '@sanity/image-url'
import { useSanityData } from '../context/FetchContext'




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

  const sanityData = useSanityData();
  const imageBuilder = imageUrlBuilder({
    projectId: 'ltj2mz49',
    dataset: 'jwilimited',
  });


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
              backgroundImage: `url(${imageBuilder.image(sanityData.result[0].Services[0].image.asset._ref).url()})`,
            }}
            ></div>
            <div className="service-text"
            style={{
              opacity: firstView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
            >
              <h5 className="service-title">{sanityData.result && sanityData.result[0].Services[0].Title}</h5>
              <p className="services-text">{sanityData.result && sanityData.result[0].Services[0].Text}</p>

            </div>
          </div>
          <div className="service-item service-second" ref={secondRef}>
          <div className="service-text"
          style={{
            opacity: secondView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          >
                            <h5 className="service-title">{sanityData.result && sanityData.result[0].Services[1].Title}</h5>
              <p className="services-text">{sanityData.result && sanityData.result[0].Services[1].Text}</p>
              
          </div>
            <motion.div className="service-image"
            style={{
              opacity: secondView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              backgroundImage: `url(${imageBuilder.image(sanityData.result[0].Services[1].image.asset._ref).url()})`,
            }}
            ></motion.div>

          </div>
          <div className="service-item service-third" ref={thirdRef}>
            <div className="service-image"
            style={{
              opacity: thirdView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              backgroundImage: `url(${imageBuilder.image(sanityData.result[0].Services[2].image.asset._ref).url()})`,
            }}
            ></div>
            <div className="service-text"
            style={{
              opacity: thirdView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
            >
              <h5 className="service-title">{sanityData.result && sanityData.result[0].Services[2].Title}</h5>
              <p className="services-text">{sanityData.result && sanityData.result[0].Services[2].Text}</p>
            </div>
          </div>
          <div className="service-item service-fourth" ref={fourthRef}>
          <div className="service-text"
          style={{
            opacity: fourthView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
          >
                         <h5 className="service-title">{sanityData.result && sanityData.result[0].Services[3].Title}</h5>
              <p className="services-text">{sanityData.result && sanityData.result[0].Services[3].Text}</p>            </div>
            <div className="service-image" 
            style={{
              opacity: fourthView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              backgroundImage: `url(${imageBuilder.image(sanityData.result[0].Services[3].image.asset._ref).url()})`,
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