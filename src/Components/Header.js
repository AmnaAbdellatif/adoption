import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
       
        <nav className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
          <h3>Menu</h3>
          <a href="#home" className="scroll">Home</a>
          <a href="#services" className="scroll">Services</a>
          <a href="#adopt" className="scroll">Adoption</a> 
          <a href="#gallery" className="scroll">Gallery</a>
          <a href="#contact" className="scroll">Contact Us</a>
          
        </nav>
        <div id="house" className="top-header">
          <div className="col-md-6 logo-w3l w32">
            <h1 className="location"><a href="">AdopTini</a> <img src="/images/Log.png" alt /></h1>
           
          </div> 
          <div className="col-md-6 logo-w3l w31 sea">
            <div className="right-w3l">
              <ul className="top-links">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              </ul>
            </div>
            <div className="w3ls_search">
              <div className="cd-main-header">
                <ul className="cd-header-buttons">
                  <li><a className="cd-search-trigger" href="#cd-search"> <span /></a></li>
                </ul> {/* cd-header-buttons */}
              </div>
              <div id="cd-search" className="cd-search">
                <form action="#" method="post">
                  <input name="Search" type="search" placeholder="Click enter after typing" />
                </form>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
     </div>

    )
  }
}
