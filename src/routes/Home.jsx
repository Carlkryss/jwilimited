import { useState } from 'react'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import Categories from '../components/categories/categories'
import HeroAbout from '../components/heroAbout/heroabout'

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
    
    </>
  )
}

export default Home