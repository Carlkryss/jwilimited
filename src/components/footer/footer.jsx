import "./footer.css"
import logo from "../../assets/logo.jpeg";


const Footer = () => {
    return ( 
        <footer>
            <div className="footer-top">
            <div className="logo"></div>
            <div className="first-col">
            <address><b>Address:</b> <em>Plot 194|199 Suite B33 Zara Plaza Life camp Abuja</em></address>
            <div className="email"><em><b>Email:</b> </em>info@jwilimited.com</div>
            <div className="phone"><em><b>Phone: </b></em>+2347043227212</div>
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