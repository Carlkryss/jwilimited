import "./projects.css"
import React from "react";
import { useAnimate, useInView } from "framer-motion"
import { useState, useRef } from "react";
import { useEffect } from "react";
import imageUrlBuilder from '@sanity/image-url'
import { useSanityData } from '../../context/FetchContext'




const ProjectsHome = React.memo(() => {

    const sanityData = useSanityData();
    const imageBuilder = imageUrlBuilder({
        projectId: 'ltj2mz49',
        dataset: 'jwilimited',
      });

      
let [imageArray, setArray] = useState(null)
let [currentImage, setCurrImage] = useState(null)

const [officeArray, setOfficeArray] = useState([]);
const [schoolArray, setSchoolArray] = useState([]);
const [hotelArray, setHotelArray] = useState([]);

useEffect(() => {
  if (sanityData && sanityData.result) {
    const newOfficeArray = [];
    const newSchoolArray = [];
    const newHotelArray = [];
    for (let i = 0; i < sanityData.result[0].officeimages.length; i++) {
      const element = sanityData.result[0].officeimages[i].asset._ref;
      newOfficeArray.push(imageBuilder.image(element).url());
    }
    for (let i = 0; i < sanityData.result[0].schoolimages.length; i++) {
      const element = sanityData.result[0].schoolimages[i].asset._ref;
      newSchoolArray.push(imageBuilder.image(element).url());
    }
    for (let i = 0; i < sanityData.result[0].hotelimages.length; i++) {
      const element = sanityData.result[0].hotelimages[i].asset._ref;
      newHotelArray.push(imageBuilder.image(element).url());
    }
    setOfficeArray(newOfficeArray);
    setSchoolArray(newSchoolArray)
    setHotelArray(newHotelArray)
    setArray(officeArray)
    imageArray && setCurrImage(imageArray[0])
  }
}, [sanityData]);








const office = useRef(null)
const school = useRef(null)
const hotel = useRef(null)
const [bigImage, changeImage] = useAnimate() 
const [title, changeTitle] = useAnimate()
const [picker, changePicker] = useAnimate()
const imageInView = useInView(bigImage)
const titleInView = useInView(title)
const pickerInView = useInView(picker)
const [projectTitle, setProjectTitle] = useState("Offices")

function hideImages(){
    changeImage(bigImage.current, { transform:"scale(1, 1)"}, { duration: .8 },{ ease: "ease" })

}

function hideTitle() {
    changeTitle(title.current, { transform:"scale(1, 1)"}, { duration: .5 },{ ease: "ease" })
}





function changeToOffice(){
    school.current.classList.remove("active-project")
    hotel.current.classList.remove("active-project")
    office.current.classList.add("active-project")
    hideImages()
    hideTitle()

    setTimeout(() => {
        setArray(officeArray)
    }, 750);

    setTimeout(() => {
    setProjectTitle("Offices")
   
    changeTitle(title.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })
    changePicker(picker.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })

    }, 1000);
}

useEffect(()=>{
    setTimeout(() => {
        setCurrImage(imageArray[0])
        changeImage(bigImage.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })
    }, 900);
},[imageArray])

function changeToSchool(){
    school.current.classList.add("active-project")
    hotel.current.classList.remove("active-project")
    office.current.classList.remove("active-project")
    hideImages()
    hideTitle()

    setTimeout(() => {
        setArray(schoolArray)
    }, 750);

    setTimeout(() => {
    setProjectTitle("Schools")
    changeTitle(title.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })
    changePicker(picker.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })

    }, 1000);
}
function changeToHotel(){
    school.current.classList.remove("active-project")
    hotel.current.classList.add("active-project")
    office.current.classList.remove("active-project")
    hideTitle()
    hideImages()

    setTimeout(() => {
        setArray(hotelArray)
    }, 750);

    setTimeout(() => {
    setProjectTitle("Hotels")
    changeTitle(title.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })
    changePicker(picker.current, { transform:"scale(0, 1)"}, { duration: .8 },{ ease: "ease" })

    }, 1000);
}

const [prevClickedElement, setPrevClickedElement] = useState(null);

const switchImage = (e) => {
    hideImages()
    setTimeout(() => {
        setCurrImage(e.target.src)
        prevClickedElement && prevClickedElement.classList.remove("scale")
        e.target.classList.add("scale")
        changeImage(bigImage.current, { transform:"scale(0, 1)"}, { duration: 1 },{ ease: "ease" })
        setPrevClickedElement(e.target)
    }, 1000);
}

    return ( 
        <section className="fourth-section">
            <div className="projects-left">
                <h4>Projects</h4>
                <p className="projects-text">
                With a track record of delivering outstanding results, we have established ourselves as a trusted partner for a wide range of electrical endeavors.
                From residential renovations and commercial installations to large-scale industrial ventures, our dedicated team has consistently surpassed expectations. We bring together the perfect blend of technical prowess, innovative solutions, and meticulous attention to detail to ensure project success.
                </p>
                <div className="project-btns">
                    <button ref={office} onClick={changeToOffice} className="first active-project">OFFICES</button>
                    <button ref={school} onClick={changeToSchool} className="second">SCHOOLS</button>
                    <button ref={hotel} onClick={changeToHotel} className="third">HOTELS</button>

                </div>
            </div>
            
  {sanityData.result && (
    <div className="projects-right">
      <h4>{projectTitle} <div ref={title}></div></h4>
      <div className="image-container">
        <img src={currentImage} alt="" className="project-image-bg" />
        <div ref={bigImage}  className="cover image-cover"></div>
      </div>
      <div className="image-selector">
        {imageArray && imageArray.map((image, index) => (
          <img key={index} src={image} onClick={(e) => switchImage(e)} />
        ))}
      </div>
      </div>
  )}


        </section>
    )
});
 
export { ProjectsHome };