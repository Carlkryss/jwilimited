import "./categories.css";
import one from "../../assets/one.jpg"
import { useState, useRef } from "react";

const categories = () => {

    const thirdSection = useRef(null)

  function categoryFunction(e) {

    console.log(e.target.className)
    if (e.target.className.includes("first")) {
        thirdSection.current.style.backgroundSize = "cover"
        thirdSection.current.style.background = "url("+ one + ")"
    }
  }

  return (
    <section className="third-section" ref={thirdSection}>
      <div className="category-item first" onMouseOver={(e) => categoryFunction(e)}>
        <div className="title">Installations and Upgrades</div>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="category-item second" onMouseOver={(e) => categoryFunction(e)}>
        <div className="title">Repairs and Maintenance</div>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="category-item third" onMouseOver={(e) => categoryFunction(e)}>
        <div className="title">Energy Efficient Solutions</div>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="category-item fourth" onMouseOver={(e) => categoryFunction(e)}>
        <div className="title">Safety Inspections</div>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default categories;
