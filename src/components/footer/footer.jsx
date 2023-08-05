import "./footer.css"   
import { useInView } from 'framer-motion'
import { useRef, useEffect } from "react";



const Footer = () => {
    const footerRef = useRef(null)
    const footerView = useInView(footerRef)



  useEffect(() => {
    if (footerView) {
        document.getElementById("logo").style.opacity = 0
    }
    else{
        document.getElementById("logo").style.opacity = 1
    }
  }, [footerView])

    return ( 
        <footer ref={footerRef}>
            <div className="footer-top">
            <div className="logo"></div>
            <div className="first-col">
            <b>Address:</b> Plot 194|199 Suite B33 Zara Plaza Life camp Abuja
            <div className="email"><b>Email:</b> info@jwilimited.com</div>
            <div className="phone"><b>Phone: </b>+2347043227212</div>
            </div>
            <div className="second-col">
                <span>Home</span>
                <span>Services</span>
                <span>Projects</span>
                <span>About us</span>
                <span>Contact us</span>
            </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">Copyright @ jwilimited.com</div>
                <span>Website designed and built by Carlkristie</span>
            </div>
        </footer> 
    );
}
 
export { Footer };