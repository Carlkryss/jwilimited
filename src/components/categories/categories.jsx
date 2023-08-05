import React, { useEffect, useRef, useState } from "react";
import one from "../../assets/one.webp";
import two from "../../assets/two.webp";
import three from "../../assets/three.webp";
import four from "../../assets/four.webp";
import "./categories.css";

const Categories = () => {
  const thirdSection = useRef(null);
  // const categoryHeaders = [
  //   "Installations and Upgrades",
  //   "Repairs and Maintenance",
  //   "Energy Efficient Solutions",
  //   "Safety Inspections",
  // ];

  const [categoryState, setState] = useState({
    i: null,
    element: null,
  });

  const staticClass = "category-item";

  function categoryFunction(e) {
    let element = e.currentTarget;
    element.nextElementSibling.style.opacity = "1"
  }

  
  function fadeOut(e) {
    let element = e.currentTarget;
    element.nextElementSibling.style.opacity = "0"
  }



  // useEffect(() => {
  //   // Preload the images
  //   const images = [one, two, three, four];
  //   images.forEach((image) => {
  //     const img = new Image();
  //     img.src = image;
  //   });
  // }, []);

  // useEffect(() => {
  //   if (categoryState.element) {
  //     const parent = categoryState.element.parentElement;
  //     const child = categoryState.element.firstChild;
  //     switch (categoryState.i) {
  //       case 0:
  //         parent.style.background = `url(${one}) 100%/cover`;
  //         break;
  //       case 1:
  //         parent.style.background = `url(${two}) 100%/cover`;
  //         break;
  //       case 2:
  //         parent.style.background = `url(${three}) 100%/cover`;
  //         break;
  //       case 3:
  //         parent.style.background = `url(${four}) 100%/cover`;
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }, [categoryState]);

  return (
    <section className="third-section" ref={thirdSection}>
        <div
          className={`${staticClass}`}
          onMouseOver={(e) => categoryFunction(e)}
          onMouseOut={(e) => fadeOut(e)}
        >
          <div className="title">Installations and Upgrades</div>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="category-background" style={{background:"url("+one+") 100%/cover"}}></div>

        <div
          className={`${staticClass}`}
          onMouseOver={(e) => categoryFunction(e)}
          onMouseOut={(e) => fadeOut(e)}
        >
          <div className="title">Repairs and Maintenance</div>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="category-background" style={{background:"url("+two+") 100%/cover"}}></div>



        <div
          className={`${staticClass}`}
          onMouseOver={(e) => categoryFunction(e)}
          onMouseOut={(e) => fadeOut(e)}
        >
          <div className="title">Energy Efficient Solutions</div>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="category-background" style={{background:"url("+three+") 100%/cover"}}></div>


        <div
          className={`${staticClass}`}
          onMouseOver={(e) => categoryFunction(e)}
          onMouseOut={(e) => fadeOut(e)}
        >
          <div className="title">Safety Inspections</div>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="category-background" style={{background:"url("+four+") 100%/cover"}}></div>


    </section>
  );
};

export default Categories;
