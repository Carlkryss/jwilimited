import "./footer.css";   
import { useInView } from 'framer-motion';
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSanityData } from '../../context/FetchContext';

const Footer = () => {
    const footerRef = useRef(null);
    const footerView = useInView(footerRef);
    const sanityData = useSanityData();
    useEffect(() => {
        if (footerView) {
            document.getElementById("logo").style.opacity = 0;
        } else {
            document.getElementById("logo").style.opacity = 1;
        }
    }, [footerView]);
    return (
        sanityData.result && (
            <footer ref={footerRef}>
                <div className="footer-top">
                    <div className="logo"></div>
                    <div className="first-col">
                        <b>Address:</b> {sanityData.result[0].address}
                        <div className="email"><b>Email:</b> {sanityData.result[0].email}</div>
                        <div className="phone"><b>Phone: </b> {sanityData.result[0].phone}</div>
                    </div>
                    <div className="second-col">
                        <Link to="/"><span>HOME</span></Link>
                        <Link to="/services"><span>SERVICES</span></Link>
                        <Link to="/projects"><span>PROJECTS</span></Link>
                        <Link to="/about"><span>ABOUT US</span></Link>
                        <Link to="/contact"><span>CONTACT</span></Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">Copyright @ jwilimitedng.com</div>
                    <span>Website designed and built by Carlkristie</span>
                </div>
            </footer>
        )
    );
}
export { Footer };