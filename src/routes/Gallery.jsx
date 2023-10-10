import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Main } from '../components/main/main'
import background from "../assets/electric1.webp"
import { ContactHome } from '../components/contactHome/contactHome'
import ScrollToTopOnMount from './scrollTo';
import { useInView } from 'framer-motion'
import image1 from '../assets/gallery/i1.jpg'
import image2 from '../assets/gallery/i10.jpg'
import image3 from '../assets/gallery/img3.jpg'
import image4 from '../assets/gallery/img4.jpg'
import image5 from '../assets/gallery/i5.jpg'
import image6 from '../assets/gallery/img6.jpg'
import image7 from '../assets/gallery/img7.jpg'
import image8 from '../assets/gallery/22.jpg'
import image9 from '../assets/gallery/img9.jpg'
import image10 from '../assets/gallery/10.jpg'
import image11 from '../assets/gallery/11.jpg'
import image12 from '../assets/gallery/i6.jpg'
import image13 from '../assets/gallery/i2.jpg'
import image14 from '../assets/gallery/i7.jpg'
import image15 from '../assets/gallery/i8.jpg'
import image16 from '../assets/gallery/i9.jpg'
import image17 from '../assets/gallery/i4.jpg'
import image18 from '../assets/gallery/24.jpg'
import image19 from '../assets/gallery/i11.jpg'
import image21 from '../assets/gallery/i12.jpg'
import image22 from '../assets/gallery/i13.jpg'
import image23 from '../assets/gallery/i14.jpg'
import image24 from '../assets/gallery/i15.jpg'
import image25 from '../assets/gallery/i16.jpg'
import image26 from '../assets/gallery/i17.jpg'
import image27 from '../assets/gallery/i18.jpg'
import image28 from '../assets/gallery/i19.jpg'
import image29 from '../assets/gallery/i20.jpg'
import image30 from '../assets/gallery/i21.jpg'
import image31 from '../assets/gallery/i22.jpg'
import image32 from '../assets/gallery/i23.jpg'
import image33 from '../assets/gallery/i24.jpg'
import image34 from '../assets/gallery/i25.jpg'
import image35 from '../assets/gallery/i26.jpg'
import image36 from '../assets/gallery/i27.jpg'
import image37 from '../assets/gallery/i28.jpg'
import image38 from '../assets/gallery/i29.jpg'
import image39 from '../assets/gallery/i30.jpg'
import image40 from '../assets/gallery/i31.jpg'
import image41 from '../assets/gallery/i32.jpg'
import image42 from '../assets/gallery/i33.jpg'
import image43 from '../assets/gallery/i34.jpg'
import image44 from '../assets/gallery/i35.jpg'
import image45 from '../assets/gallery/i36.jpg'
import image46 from '../assets/gallery/i37.jpg'
import image47 from '../assets/gallery/i38.jpg'
import image48 from '../assets/gallery/i39.jpg'
import image49 from '../assets/gallery/i40.jpg'
import image50 from '../assets/gallery/i41.jpg'
import image51 from '../assets/gallery/i42.jpg'
import image52 from '../assets/gallery/i43.jpg'
import image53 from '../assets/gallery/i44.jpg'
import image54 from '../assets/gallery/i45.jpg'
import image55 from '../assets/gallery/i47.jpg'
import image56 from '../assets/gallery/i48.jpg'
import image57 from '../assets/gallery/i49.jpg'
import image58 from '../assets/gallery/i50.jpg'
import image59 from '../assets/gallery/i51.jpg'
import image60 from '../assets/gallery/i52.jpg'










export default function Gallery() {

	const imageArray = [image1, image9, image3, image6, image7,
						image17, image5, image11, image12, image10,
						image14,image15, image16, image2, image8,
						 image18, image13, image19,  image21,image22,
						  image23, image24, image25, image26, image27,
						image28, image29, image30, image32, image33,
						 image34, image35,image36, image37, image38,
						  image39, image40, image41, image42,image43,
						image44, image45, image46, image47, image48,
						image49, image50, image51, image52, image53,
						 image54, image55, image56, image57, image58,
						image59, image60, image31
					];
    const galleryTextRef = useRef(null)
    const galleryTextView = useInView(galleryTextRef, { once: true })

	const [galleryTitle, setGalleryTitle] = useState(null)
	useEffect(() => {
	window.addEventListener("resize", handleResize)
	handleResize()
	},[galleryTitle])
	function handleResize() {
		if (window.innerWidth < 800) {
			setGalleryTitle("GALLERY")
		} else {
			setGalleryTitle("PROJECT GALLERY")
		}
	}

  return (
    <>
    <ScrollToTopOnMount></ScrollToTopOnMount>
      <Header></Header>
      <Main background={background} title={galleryTitle}></Main>
      <div className="gallery" ref={galleryTextRef}
      style={{
          opacity: galleryTextView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}>


		
				<div className="gallery__column">
				{
			imageArray && imageArray.slice(0,17).map((image, index)=>(
					<div className="gallery__link">
						<figure className="gallery__thumb">
							<img src={image} alt="" className="gallery__image" />
						</figure>
					</div>
					))
		}
				</div>
				<div className="gallery__column">
				{
			imageArray && imageArray.slice(17,37).map((image, index)=>(
					<div className="gallery__link">
						<figure className="gallery__thumb">
							<img src={image} alt="" className="gallery__image" />
						</figure>
					</div>
					))
		}
				</div>
				<div className="gallery__column">
				{
			imageArray && imageArray.slice(37,60).map((image, index)=>(
					<div className="gallery__link">
						<figure className="gallery__thumb">
							<img src={image} alt="" className="gallery__image" />
						</figure>
					</div>
					))
		}
				</div>

      </div>
      <ContactHome></ContactHome>
      <Footer></Footer>
    </>
  )
}
