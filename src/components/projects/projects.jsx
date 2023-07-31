import "./projects.css"
import { useAnimate, useInView } from "framer-motion"
import { useState, useRef } from "react";
import office from "../../assets/office.jpg";
import school from "../../assets/school.jpg";
import hotel from "../../assets/hotel.jpg";
import hotel1 from "../../assets/hotel1.jpg"
import hotel2 from "../../assets/hotel2.jpg"
import hotel3 from "../../assets/hotel3.jpg"
import hotel4 from "../../assets/hotel6.jpg"
import hotel5 from "../../assets/hotel5.jpg" 
import school1 from "../../assets/school1.jpg"
import school2 from "../../assets/school2.jpg"
import school3 from "../../assets/school3.jpg"
import school4 from "../../assets/school4.jpg"
import school5 from "../../assets/school5.jpg"
import office2 from "../../assets/office2.jpg"
import office3 from "../../assets/office3.jpg"
import office4 from "../../assets/office4.jpg"
import office5 from "../../assets/office1.webp"
import { useEffect } from "react";




const ProjectsHome = () => {

let officeArray = [ office2, office3, office4, office5]
let hotelArray = [hotel1, hotel2, hotel3, hotel4, hotel5]
let schoolArray = [school1, school2, school3, school4, school5] 

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

function hidePicker(){
    changePicker(picker.current, { transform:"scale(1, 1)"}, { duration: .8 },{ ease: "ease" })

}

useEffect(() => {
    if (imageInView) {
      changeImage(bigImage.current, { transform:"scale(0, 1)"}, { duration: 1 },{ ease: "ease" })
    }
    if (titleInView) {
        changeTitle(title.current, { transform:"scale(0, 1)"}, { duration: 1 },{ ease: "ease" })
      }
      if (pickerInView) {
        changePicker(picker.current, { transform:"scale(0, 1)"}, { duration: 1 },{ ease: "ease" })
      }
 }, [imageInView, titleInView, pickerInView])



function changeToOffice(){
    school.current.classList.remove("active-project")
    hotel.current.classList.remove("active-project")
    office.current.classList.add("active-project")
    hideImages()
    hideTitle()
    hidePicker()

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
    hidePicker()

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
    hidePicker()

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
            <h4 >{projectTitle} <div className="cover" ref={title}></div></h4>
                <div className="image-container">
                <img src={currentImage} alt="" className="project-image-bg" />
                <div ref={bigImage}  className="cover image-cover"></div>
                </div>
                <div  className="image-selector">
                    {imageArray.map((image, index)=>(
                        <img key={index} src={image} onClick={(e)=>switchImage(e)}/>
                    ))}
                    <div className="cover" ref={picker}></div>
                </div>
            </div>
        </section>
     );
}
 
export { ProjectsHome };