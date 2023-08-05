import { useState } from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Categories from '../components/categories/categories'
import HeroAbout from '../components/heroAbout/heroabout'
import { ContactHome } from '../components/contactHome/contactHome'
import { ProjectsHome } from '../components/projects/projects'
import { Footer } from '../components/footer/footer'
import ScrollToTopOnMount from './scrollTo';



function Home() {
  return (
    <>
    <ScrollToTopOnMount/>
    <section className='first-section'>
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