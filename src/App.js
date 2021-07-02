
import React ,{Component} from 'react';
import Services from './Components/Services';
import Home from './Layouts/Home';
import Adoption from './Layouts/Adoption';
import Veterinary from './Layouts/Veterinary';
import Contactus from './Layouts/contact-us';
import Gallery from './Layouts/Gallery';
import Fournisseur from './Layouts/Fournisseur';
import Rest from './Layouts/Rest';
import VetoMap from './Layouts/VetoMap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Layouts/Auth';
import Login from './Layouts/Login';
import signup from './Layouts/Register';
import Veto from './Layouts/Veto';
import Veterinaries from './Layouts/Veterinaries';
import axios from 'axios';

export default class  App extends Component {
  
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
        
        console.log("users",res.data);
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


  render() {
  return (
    
    <Router>
    
     
      <Switch>
        <Route exact path='/Home'  component={()=><Home users={this.state.users}/>} />
        <Route path='/Adoption' component={Adoption} />
        <Route path='/Fournisseur' component={Fournisseur} />
        <Route path='/Veterinary' component={Veterinary} />
        <Route path='/Contactus' component={Contactus} />
        <Route path='/Auth' component={Auth} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Rest' component={Rest} />
        <Route path='/VetoMap' component={VetoMap} />
        <Route path='/Login' component={Login} />
        <Route path='/Veto' component={Veto} />
        <Route path='/signup' component={signup} />
        <Route path='/Veterinaries' component={Veterinaries} />
      </Switch>
    </Router>
  );
  
}
}

