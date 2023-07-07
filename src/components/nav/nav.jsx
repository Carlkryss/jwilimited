import { useState, useRef, useEffect } from 'react';
import { useAnimate, stagger, easeInOut } from "framer-motion"
import "./nav.css";

function Nav(props) {
  const [scope, animate] = useAnimate()
  const [navscope, navanimate] = useAnimate()

  // Update the navState when the props.view changes
  useEffect(() => {
   if (props.view == true) {
    animate(
      navscope.current,
      {
        transform:"scale(1,1)"

      },
      {
        delay: stagger(0.1, {ease:easeInOut})
      },
      {
        type: "spring",
        bounce: 0,
        duration: 2
      }
    );
    animate(
      "li",
      {
        paddingTop:"0px"

      },
      {
        delay: stagger(0.3, {from:"first"}, {ease:easeInOut})
      },
      {
        type: "spring",
        bounce: 0,
        duration: 2
      }
    );
    
   }
   else{

    animate(
      navscope.current,
      {
        transform:"scale(1,0)"
  
      },
      {
        delay: .5
      },
      {
        type: "spring",
        bounce: 0,
        duration: 2
      }
    );

    animate(
      "li",
      {
        paddingTop:"50px"

      },
      {
        type: "ease",
        duration: .2
      }
    );
    
   }

  }, [props.view]);

  return (
    <nav ref={navscope}>
      <ul ref={scope}>
        <li>HOME</li>
        <li>SERVICES</li>
        <li>PROJECTS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Nav;
