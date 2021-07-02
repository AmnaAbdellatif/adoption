import React, { Component } from 'react'

export default class Menu extends Component {
  
  
  render() {
    
    return (
      <div>
        
        {/*start-slider*/}
        <div className="banner">
          <div className="banner-slider">
            <div className="container">
              <div id="top" className="callbacks_container">
                <ul className="rslides" id="slider4">
                  <li>
                    <div className="banner-info " >
                      <div className="banner-right-agileits">
                        <h3>Welcome to Adoptini.</h3>
                        <p>We offer all the best quality products and services for your adorable future pets.</p>
                        <a href="#services" className="scroll banner-button">Our Services</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-info">
                      <div className="banner-right-agileits">
                        <h3>we take care of your pets</h3>
                        <p>Discover the amazing health services that we can offer to your pets to be adopted.</p>
                        <a href="#about" className="scroll banner-button">About Us</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="banner-info">
                      <div className="banner-right-agileits">
                        <h3>Adopt a pet.</h3>
                        <p>We have many adorable pets who need a home. Share the Love, adopt!</p>
                        <a href="#adopt" className="scroll banner-button">Adopt today</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        
      </div>

    )
  }
}
