import "./contactHome.css"
import { Link } from "react-router-dom";

function ContactHome() {
    return ( 
        <section className="contactHome">
           <div className="contact-container"> 
            <h5>READY TO DISCUSS YOUR NEXT PROJECT?</h5>
            <div className="link">
            <Link to="/contact">
            GET IN TOUCH
            </Link>
            </div>
            </div>
        </section>
     );
}

export { ContactHome };