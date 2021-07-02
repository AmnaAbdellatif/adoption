import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
              
<div>
  <div className="contact-agile" id="contact">
    <div className="container">
      <h3 className="tittle">Contact Us</h3>
      <div className="contact-middle">
        <form action="#" method="post">
          <div className="form-agileinfo">
            <p>Name</p>
            <input type="text" name="your name" placeholder="Your name" required />
            <p>Email</p>
            <input type="email" name="your email" placeholder="Your email" required />
          </div>
          <div className="form-agileits-w3layouts">
            <p>Comments</p>
            <textarea name="your message" placeholder="Your message" required defaultValue={""} />
            <input type="submit" defaultValue="Send Message" />
          </div>
          <div className="clearfix" />
        </form>
      </div>
    </div>
  </div>
  <div className="col-md-15 footer-w3layouts">
    <div className="container"></div>
    <div className="footer-top-agile">
      <h2><a href="index.html">Adoptini</a></h2>
      <div className="footer-contact-w3ls">
        <p className="num-w3ls">+216 73254789</p>
        <p className="email-w3l">Email: <a href="mailto:adoptini@gmail.com">adoptini@gmail.com</a></p>
      </div>
      <div className="clearfix" />
    </div>
    <div className="footer-bottom-wthree">
      <div className="nav-footer-w3l">
        <a href="#home" className="scroll">Home</a>
        <a href="#services" className="scroll">Services</a>
        <a href="#about" className="scroll">About</a>
        <a href="#adopt" className="scroll">Adoption</a>
        <a href="#contact" className="scroll">Contact</a>
      </div>
      <div className="footer-button"><a href="#contact" className="scroll">Get in touch</a></div>
      <div className="clearfix" />
    </div>
  </div>
  
  <div className="clearfix" />
  <div className="copy">
    <p>© 2021 Adoptini . All Rights Reserved |  Tunisia</p>
  </div>
</div>

            </div>
        )
    }
}
