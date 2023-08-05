import { useEffect, useState, useRef } from 'react'
import Nav from '../nav/nav'
import { motion, useScroll, useMotionValueEvent, useAnimate, easeIn } from "framer-motion"
import { useInView } from 'framer-motion'
import './header.css'

function Header() {

  const [navState, changeNavState] = useState(false);
  const logoref = useRef(null)
  const logoview = useInView(logoref, { once: true })
  const [scope, animate] = useAnimate()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest> 80 && screen.width > 1000) {
      animate(scope.current,{transform:"translateX(-100px)"}, {duration:1})
      animate(scope.current,{boxShadow:"none"}, {duration:.5})
    }
    if (latest> 80 && screen.width <= 800) {
      animate(scope.current,{transform:"translateX(0px)"}, {duration:1})
      animate(scope.current,{boxShadow:"none"}, {duration:.5})
    }
    if (latest<80) {
      animate(scope.current,{transform:"translateY(0px)"}, {duration:1},{ease:easeIn})
      animate(scope.current,{transform:"translateX(0px)"}, {duration:1})

    }
    if (latest<80 && screen.width <=800) {
      animate(scope.current,{transform:"translateX(400%)"}, {duration:1},{ease:easeIn})
      animate(scope.current,{transform:"translateY(0px)"}, {duration:1})


    }
  })



  




  const handleNavClick = () => {
    changeNavState(!navState);
  };


  return (
    <>
      <header ref={logoref}>
      <motion.div ref={scope}  className={`logo ${logoview ? "none": "logoshift"}`} id='logo'
      style={{
        opacity: logoview ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}  drag="x" dragConstraints={{ left: -100, right: 100 }}/>
        <div className={`hamburg ${navState ? "active" : ""}`} onClick={handleNavClick} style={{
        opacity: logoview ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
      }}>
        <svg className="hj" height="75" width="75" viewBox="0 0 75 75">
            <rect className={`top ${navState ? "rect" : ""}`} x="15" y="21.75" width="50" height="2" fill='rgba(255, 255, 255, 1)'></rect>
            <rect className={`middle ${navState ? "rect" : ""}`} x="15" y="34.1809" width="43" height="2" fill='rgba(255, 255, 255, 1)'></rect> 
            <rect className={`bottom ${navState ? "rect" : ""}`} x="15" y="46.6117" width="38" height="2" fill='rgba(255, 255, 255, 1)'></rect> 
        </svg>
        </div>
        <Nav view={navState}></Nav>
      </header>
    </>
  )
}

export default Header