import React, { useState,Component } from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Container, Row, Col } from 'reactstrap';
import { Button, Toolbar } from '@material-ui/core';
import NavMenu from './NavMenu';

//  function Navbar() {
   class Navbar extends Component {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     sidebar: false ,
        
       
    //   };
    //   this.state = {
    //         showSidebar: !this.state.sidebar
    //       };
      
    // }
    // constructor  (props) {
    //   super(props);
    //   this.state = {
    //     showSidebar: !sidebar
    //   };
    // }
  // const [sidebar, setSidebar] = useState(false);
 
  // const showSidebar = () => setSidebar(!sidebar);

// let buttons;
 render () {
   let buttons;
   if (this.props.users){
     buttons = (
      // <IconContext.Provider value={{ color: '#fff' }}>
      // <div className='navbar '>
      
      // <NavMenu/>
     
      //   <div id="house" > 
        
      //     <h1 className="location"><a href="/Home">AdopTini</a> <img src="/images/Log.png" alt /></h1> 
      //     {/* <h6>Need care,Need you</h6> */}
         
            //  <ul className="cd-header-buttons">
               
            //    <Link to={'/Auth'}  onClick={() => localStorage.clear()} className='nav-link'>Logout</Link>
            //   </ul> 
              <ul className="cd-header-buttons">
              <li><a className="cd-search-trigger" href="#cd-search"> <span /></a>
              
             <li className="nav-item">
             <Link to={'/Auth'}  onClick={() => localStorage.clear()} className='nav-link'>Logout</Link> 
             </li></li>
             
            </ul> 
           
            // </div>
      //       <div id="cd-search" className="cd-search">
      //         <form action="#" method="post">
      //           <input name="Search" type="search" placeholder="Click enter after typing" />
                
      //         </form>
              
      //     </div>
        
      // </div> 
      
   

    
    // </IconContext.Provider>
     )} else {
       buttons = (
 
    
     
               <ul className="cd-header-buttons">
                  <li><a className="cd-search-trigger" href="#cd-search"> <span /></a>
                  <li className="nav-item">
                 <Link to={'/Login'} className='nav-link'>Login </Link>
                 </li>
                 <li className="nav-item">
                 <Link to={'/signup'} className='nav-link'>Register </Link>
                 </li></li>
                 <li className="nav-item">
             <Link to={'/Auth'}  onClick={() => localStorage.clear()} className='nav-link'>Logout</Link> 
             </li>
               
                </ul> 
               
             
             
                
          
     

  // );
       )
}
return (
<IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar '>
        
        <NavMenu/>
       
          <div id="house" > 
          
            <h1 className="location"><a href="/Home">AdopTini</a> <img src="/images/Log.png" alt /></h1> 
            {/* <h6>Need care,Need you</h6> */}
           
             
               <div className="collapse navbar-collapse"> 
               {buttons}
               </div>
              </div>
              <div id="cd-search" className="cd-search">
                <form action="#" method="post">
                  <input name="Search" type="search" placeholder="Click enter after typing" />
                  
                </form>
                
            </div>
          
        </div> 
        
     

      
      </IconContext.Provider>
        
);
   }}
export default Navbar;