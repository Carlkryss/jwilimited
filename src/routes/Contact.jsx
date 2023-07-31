import { useState } from 'react'
import Header from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Main } from '../components/main/main'
import background from "../assets/background1.jpg"

function Contact() {
  return (
    <section className='contact-section'>
      <Header></Header>
      <Main background={background} title="CONTACT US"></Main>
      <div className="contactp-container">
        <div className="contact-left">
          <div className="contact-header">
            Have a project to discuss, <span>get in touch.</span>
          </div>
          <form action="submit" className="contact-form">
            <div className="first-row">
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className="second-row">
              <label htmlFor="email">Email Address</label>
              <input type="email" />
            </div>
            <div className="third-row">
              <label htmlFor="phone">Phone</label>
              <input type="tel"/>
            </div>
            <div className="fourth-row">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="textarea" cols="30" rows="80"></textarea>
            </div>
            <button className='contact-button' name='submit'>Send Message</button>
          </form>
        </div>
        <div className="contact-right">
          <div className="floating-banner">
            We will get back to you within one business day
          </div>
        </div>
      </div>
      <div className="gap"></div>
     <Footer></Footer>
    </section>
  )
}

export default Contact