import React, { Component } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
export default class Auth extends Component {
  render() {
    return (

      <div >
      <Navbar />
      <h2 style={{ width: 950 ,marginLeft:245  }}>Thank you for your visit,see you soon!</h2>
      <br />
        <Footer/>
      </div>
     
    )
  }
}

