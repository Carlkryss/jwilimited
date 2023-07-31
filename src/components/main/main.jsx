import "./main.css"
import { useInView } from "framer-motion";
import { useRef } from "react";


function Main(props) {

  const headerRef = useRef(null)
  const headerView = useInView(headerRef, { once: true })


    const mainStyle = {
      backgroundImage: `url(${props.background})`,
    };
  
    return (
      <section className="main" style={mainStyle}>
        <div className="page-title" ref={headerRef}>
        <span 
        style={{
          paddingTop: headerView ? "0" : "64px",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s",
        }}
        >{props.title}</span></div>
      </section>
    );
  }
  
  export { Main };
  