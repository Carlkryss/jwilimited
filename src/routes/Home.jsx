import { useState, useEffect } from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Categories from '../components/categories/categories'
import HeroAbout from '../components/heroAbout/heroabout'
import { ContactHome } from '../components/contactHome/contactHome'
import { ProjectsHome } from '../components/projects/projects'
import { Footer } from '../components/footer/footer'
import ScrollToTopOnMount from './scrollTo';
import imageUrlBuilder from '@sanity/image-url'
import { useSanityData } from '../context/FetchContext'



function Home() {
  const [backgroundPic, setBackground] = useState(null)
  const sanityData = useSanityData();
  const imageBuilder = imageUrlBuilder({
    projectId: 'ltj2mz49',
    dataset: 'jwilimited',
  });
 
  useEffect(() => {
    if (sanityData && sanityData.result) {
      let imageUrl = imageBuilder.image(sanityData.result[0].mainImage.asset._ref).url();
      setBackground(imageUrl)
    }
  }, [sanityData]);

  const heroStyle = {
    backgroundImage: `url(${backgroundPic})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }

  
  return (
    <>
    <ScrollToTopOnMount/>
    <section className='first-section' style={heroStyle}>
    <Header></Header>
    <Hero></Hero>
    </section>

    <section className='second-section'>
      <HeroAbout></HeroAbout>
    </section>
    <Categories></Categories>
    <ProjectsHome></ProjectsHome>
    <ContactHome></ContactHome>
    <Footer></Footer>
    </>
  )
}

export default Home