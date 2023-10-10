import React, { useState, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';
import './cert.css';
import cert1 from '../../assets/certifications/avon.png';
import cert2 from '../../assets/certifications/npc.png';
import cert3 from '../../assets/certifications/fao.png';
import cert4 from '../../assets/certifications/fml.png';
import cert5 from '../../assets/certifications/aardo.png';
import cert6 from '../../assets/certifications/IIM.png';
import cert7 from '../../assets/certifications/nemsa.png';

function Cert() {

  const [cert, setCert] = useState(null)
  const certs = [
    "Nigerian Electricity Management Services​​ Agency NEMSA",
    "Federal Ministry of Labour and Employment",
                  "Avnon Academy Israel",
                  "Dr. Ambedkar Institute of Productivity",
                  "The Korean Experience ​​​​​​Korea FAO Association",
                  "African-Asian Rural Development Organization",
                  "Indian Institute of Management (IIM) Jammu",
                ]
const [scope, animate] = useAnimate()
  const certRef = useRef(null)

  function changeCert(index) {
    setCert(certs[index])
    animate(scope.current, { opacity: 1 })


  }

  function removeCert() {
    animate(scope.current, { opacity: 0 })
  }
  const certArray = [cert7, cert4, cert1, cert2, cert3, cert5, cert6 ];

  return (
    <div className='cert-section'>
      <div className="cert-title">Certifications</div>
      <ul className='cert-container'>
        <div className="certs">        {certArray.map((cert, index) => (
          <li onMouseOut={removeCert} onMouseOver={()=>{changeCert(index)}} className="cert" key={index} style={{ backgroundImage: `url(${cert})` }}></li>
        ))}</div>
        <div className="cert-name" ref={scope}>{cert}</div>
      </ul>
    </div>
  );
}

export default Cert;
