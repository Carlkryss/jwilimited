import React, { useEffect, useRef, useState } from "react";
import imageUrlBuilder from '@sanity/image-url'
import "./categories.css";
import { useSanityData } from '../../context/FetchContext'

const Categories = () => {
  const sanityData = useSanityData();
  const thirdSection = useRef(null);
  const imageBuilder = imageUrlBuilder({
    projectId: 'ltj2mz49',
    dataset: 'jwilimited',
  });

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (sanityData.result && sanityData.result[0].Services) {
      const urls = sanityData.result[0].Services.map(service => {
        return imageBuilder.image(service.image.asset._ref).url();
      });
      setImageUrls(urls);
    }
  }, [sanityData]);

  const staticClass = "category-item";

  function categoryFunction(e) {
    let element = e.currentTarget;
    element.nextElementSibling.style.opacity = "1"
  }

  function fadeOut(e) {
    let element = e.currentTarget;
    element.nextElementSibling.style.opacity = "0"
  }

  return (
    <section className="third-section" ref={thirdSection}>
      {sanityData.result &&
        sanityData.result[0].Services &&
        sanityData.result[0].Services.map((service, index) => (
          <React.Fragment key={index}>
            <div
              className={`${staticClass}`}
              onMouseOver={(e) => categoryFunction(e)}
              onMouseOut={(e) => fadeOut(e)}
            >
              <div className="title">{service.Title}</div>
              <button className="learn-more">Learn More</button>
            </div>
            <div
              className="category-background"
              style={{ background: `url(${imageUrls[index]}) 100%/cover` }}
            ></div>
          </React.Fragment>
        ))}
    </section>
  );
};

export default Categories;
