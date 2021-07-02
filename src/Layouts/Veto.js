import React,{Component,useState} from 'react';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import axios from 'axios';
export default class Veto extends Component {
  
 
  state= {};
  componentDidMount = () => {
    const config  = {
      headers :{
        Authorization : `Bearer` + localStorage.getItem(`token`)}

    };
  
    //  var token= localStorage.getItem('token');
    // console.log("token", token);
    axios.get('http://127.0.0.1:8000/api/veterinaries/',    { headers: {"Authorization": `Bearer ${localStorage.getItem(`token`)}`}} ).then(
      res => {
        this.veterinaries = res.data['hydra:member'];

        console.log("veterinaries",res.data['hydra:member']);
        this.setState({
          users:res.data
         
        });
        // res.data['hydra:member'][0]['adresse'][0]['adresse']['adresse'];
      },
      err => {
        console.log(err)
        console.log("err fi vetoo");
      }
    )
  };

  render () {
    // if(this.props.users) {
    //   return(
    //     <h2> Hellooooooo</h2>
    //   ) }

      
  return (
    
    <div >
     
      <Navbar />
      <h6   > Welcome  </h6>
        <Menu/>
     
        <Services/>
        <Footer/>
      
       
    </div>
    
  )
 
}

  
  }