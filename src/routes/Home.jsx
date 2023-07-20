import { useState } from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Categories from '../components/categories/categories'
import HeroAbout from '../components/heroAbout/heroabout'
import { ContactHome } from '../components/contactHome/contactHome'
import { Projects } from '../components/projects/projects'
import { Footer } from '../components/footer/footer'


function Home() {
  return (
    <>
    <section className='first-section'>
    <Header></Header>
    <Hero></Hero>
    </section>

    <section className='second-section'>
      <HeroAbout></HeroAbout>
    </section>
    <Categories></Categories>
    <Projects></Projects>
    <ContactHome></ContactHome>
    <Footer></Footer>
    </>
  )
}

export default Home