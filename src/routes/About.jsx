import { useState } from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Main } from '../components/main/main'
import background from "../assets/electric1.webp"
import { ContactHome } from '../components/contactHome/contactHome'


function About() {
  return (
    <>
      <Header></Header>
      <Main background={background} title="ABOUT US"></Main>
      <div className="about-container">
        <p className="about-text">
        Joseta Works Integrated Limited (JWIL) is mainly into Electrical Engineering, delivers high quality construction and maintenance outcomes for a wide range of clients. Our trained and certified electricians can resolve the most complex of electrical issues and have built a solid reputation of successfully delivering premier electrical contracting and maintenance solutions for public sectors and private customers in commercial, domestic and industrial markets throughout Nigeria.
        </p>
        <p className="about-text">
        Joseta Works Integrated Limited (JWIL) is a registered company with the Cooperate Affairs Commission (CAC) over decade Joseta Works Integrated Limited assigns highly skilled project managers from Abuja to other states all work and projects across the Nation. Joseta Works Integrated Limited (JWIL) has been providing electrical services for 12+ years and places great emphasis on our relationship with clients, private or commercial, and pride ourselves on the ability to respond to our clients’ needs in an efficient and cost-effective way.
        </p>
      </div>
      <ContactHome></ContactHome>
      <Footer></Footer>
    </>
  )
}

export default About
