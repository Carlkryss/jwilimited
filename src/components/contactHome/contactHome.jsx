import "./contactHome.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSanityData } from '../../context/FetchContext'
import imageUrlBuilder from '@sanity/image-url'



function ContactHome() {
    const [backgroundPic, setBackground] = useState(null)
    const sanityData = useSanityData();
    const imageBuilder = imageUrlBuilder({
      projectId: 'ltj2mz49',
      dataset: 'jwilimited',
    });
   
    useEffect(() => {
      if (sanityData && sanityData.result) {
        let imageUrl = imageBuilder.image(sanityData.result[0].contactBackground.asset._ref).url();
        setBackground(imageUrl)
        console.log(sanityData.result[0])
      }
    }, [sanityData]);
    const contactStyle = {
        backgroundImage: `url(${backgroundPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    return ( 
        <section className="contactHome" style={contactStyle}>
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