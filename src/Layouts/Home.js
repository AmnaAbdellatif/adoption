import React,{Component} from 'react';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import axios from 'axios';
export default class Home extends Component {
  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };
 
  state= {};
  componentDidMount = () => {
    const config  = {
      headers :{
        Authorization : `Bearer` + localStorage.getItem(`token`)}

    };
 
    //  var token= localStorage.getItem('token');
    // console.log("token", token);
    axios.get('http://127.0.0.1:8000/api/users',    { headers: {"Authorization": `Bearer ${localStorage.getItem(`token`)}`}} ).then(
      res => {
        this.users = res.data['hydra:member'];

        console.log("users",res.data['hydra:member']);
        this.setState({
          users:res.data
        });
      },
      err => {
        console.log(err)
        console.log("err fi users");
      }
    )
  };

  render () {
    // if(this.props.users) {
    //   return(
    //     <h2> Hellooooooo</h2>
    //   ) }
      if (this.props.users) {
      
  return (
    
    <div >
       {this.handleRefresh}
      <Navbar />
      <h6   > Welcome  </h6>
        <Menu/>
     
        <Services/>
        <Footer/>
      
       
    </div>
    
  )
 
}
return (
    
  <div >
     
    <Navbar />
      <Menu/>
   
      <Services/>
      <Footer/>
  </div> 
)
  }
  }