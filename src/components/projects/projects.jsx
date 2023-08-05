import "./projects.css"
import React from "react";
import { useAnimate, useInView } from "framer-motion"
import { useMemo } from "react";
import { useState, useRef } from "react";
import office from "../../assets/office.webp";
import school from "../../assets/school.webp";
import hotel from "../../assets/hotel.webp";
import hotel1 from "../../assets/hotel1.webp"
import hotel2 from "../../assets/hotel2.webp"
import hotel3 from "../../assets/hotel3.webp"
import hotel4 from "../../assets/hotel6.webp"
import hotel5 from "../../assets/hotel5.webp" 
import school1 from "../../assets/school1.webp"
import school2 from "../../assets/school2.webp"
import school3 from "../../assets/school3.webp"
import school4 from "../../assets/school4.webp"
import school5 from "../../assets/school5.webp"
import office2 from "../../assets/office2.webp"
import office3 from "../../assets/office3.webp"
import office4 from "../../assets/office4.webp"
import office5 from "../../assets/office1.webp"
import { useEffect } from "react";




const ProjectsHome = React.memo(() => {

    

    const officeArray = useMemo(() => [office2, office3, office4, office5], []);
    const hotelArray = useMemo(() => [hotel1, hotel2, hotel3, hotel4, hotel5], []);
    const schoolArray = useMemo(() => [school1, school2, school3, school4, school5], []);
    

let [imageArray, setArray] = useState(officeArray)
let [currentImage, setCurrImage] = useState(imageArray[4])

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
            <div className="projects-right">
            <h4 >{projectTitle} <div ref={title}></div></h4>
                <div className="image-container">
                <img src={currentImage} alt="" className="project-image-bg" />
                <div ref={bigImage}  className="cover image-cover"></div>
                </div>
                <div  className="image-selector">
                    {imageArray.map((image, index)=>(
                        <img key={index} src={image} onClick={(e)=>switchImage(e)}/>
                    ))}
                </div>
            </div>
        </section>
    )
});
 
export { ProjectsHome };