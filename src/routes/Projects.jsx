import { useState } from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Main } from '../components/main/main'
import background from "../assets/electric2.webp"
import { ContactHome } from '../components/contactHome/contactHome'
import { ProjectsHome } from '../components/projects/projects'
import ScrollToTopOnMount from './scrollTo';


function Projects() {
  return (
    <>
        <ScrollToTopOnMount></ScrollToTopOnMount>
        <Header></Header>
      <Main background={background} title="PROJECTS"></Main>
      <div className="projects-container">
        <ProjectsHome></ProjectsHome>
      </div>
      <ContactHome></ContactHome>
      <Footer></Footer>
    </>
  )
}

export default Projects