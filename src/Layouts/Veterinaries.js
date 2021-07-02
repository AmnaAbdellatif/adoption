import React,{Component,useState,useEffect} from 'react';

import Menu from '../Components/Menu';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import axios from 'axios';
import { keys } from '@material-ui/core/styles/createBreakpoints';

import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Collapse from '@material-ui/core/Collapse';
import Navbar from '../Components/Navbar';
import Box from '@material-ui/core/Box';
import { FaRegIdCard } from 'react-icons/fa';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import { InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import TodoList from '../Components/TodoList';
const Customers = (props) =>{
    const [customers, setCustomers] = useState([]);
    /*[..Other const.]*/
    const [search, setSearch] = useState("");
 
    /* Getting all data from api-server with axios */

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  const [filtereVeto, setFiltereVeto] = useState([]);
//   const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 900,
     margin: 'auto',
    
    
      },
      
      media: {
        height: 50,
        paddingTop: '70.25%', // 16:9
      },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.50)',
    },
    title: {
      fontSize: 14,
    },
    
    Card: {
        color:"orange",
      id:"cadId"
           
    
      },
      

      avatar: {
        backgroundColor: red[500],
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      paginationContainer: {
        display: "flex",
        justifyContent: "center"
      },
      divider: {
        height: 28,
        margin: 4,
      },
      scrollBannerButton: {
        padding:0 ,
        flex: 1,
        position: 'absolute'
      },
      
  }));
  const classes = useStyles();





    useEffect(()=>{
        axios.get('http://localhost:8000/api/veterinaries',  { headers: {"Authorization": `Bearer ${localStorage.getItem(`token`)}`}})
            .then( response => response.data['hydra:member'])
            .then(data => setCustomers(data))
        
            .catch(error => console.log(error.response));
    }, []);
 
    /* when search input value change */
    const HandleSearch = event =>{
        const value = event.currentTarget.value;
        setSearch(value.toLowerCase());
    };
 
    /* filtering customers by search value*/
    // const filteredCustomers = customers.filter(
    //     customer =>{
           
    //         (customer.company && customer.company.toLowerCase().includes(search) )||
    //         customer.email.toLowerCase().includes(search);
 
    // });
 
    useEffect(() => {
        
            setFiltereVeto(
                customers.filter((veto) =>
              veto.governorate.toLowerCase().includes(search.toLowerCase())
              )
            );
           
          }, [search, customers]);
          
      if (loading) {
        return <p>Loading veterinaries...</p>;
      }
    //Return null. But why???
 
    return (




<div className="App">
    
    <div >
      <Navbar />
    
     
   
     <MuiThemeProvider>
    
 
      <input style={{ width: 300, marginRight:10 , display :'inline-block'}}
      
      name='search' 
        type="text"
        class="form-control"
         placeholder="Enter your governorate for the nearest veterinary" 
        
        onChange={(e) => setSearch(e.target.value)}
       
     />
  
   <a InputBase href="/VetoMap"    flex= '1' className="scroll banner-button">VetoMap  </a>
       
      </MuiThemeProvider>
     
     </div>
     

   
            {filtereVeto.map((val,key)=>{
 

      


                return (
                    <div key={key}  id="unique-id">  
                   <PerfectScrollbar> 
<Card  className={classes.root}  >

<CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Dr
           
          </Avatar>
      
        }
        title={
        <Typography variant="h1"  className={classes.title}     color="primary" gutterBottom>
        {val.nomveterinary}
     
         </Typography>}
         
        />
        {/* <CardActions>
        <Button size="small"></Button>
        {val.description}
      </CardActions> */}
       <CardContent > 
        
        <Typography variant="subtitle1" component="h2" color="primary" >
        Contact: {val.contact}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Address: {val.adresse}
        </Typography>
        <Typography variant="body2" component="p">
        Category:{val.categorieveto}
        </Typography>
        <Typography variant="body2" component="p">
       Governorate:{val.governorate}
        </Typography>
      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
         Show description 
          
        <FavoriteIcon />
        
        </IconButton>
    
        <IconButton aria-label="add to favorites"
        
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        
          onClick={handleExpandClick}
       
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent > 
        
        <Typography variant="overline" component="p" color='textSecondary' >
     {val.description} <br/>
  
  
    
    
  
  


                                    
        </Typography>
      </CardContent>
      </Collapse>
    </Card>
  
    </PerfectScrollbar>
    {""}
    
</div>

                ); 
   })}
  
     
    <div>
    <div className='todo-app'>
      <TodoList />
    </div> 
    <Footer/> </div>

</div>



 
);


               
          
           

              }







    //     <div id="content-wrapper">
    //                 <h1 className="mr-auto">Liste des utilisateurs</h1>
                    
    //                 <table className="table table-hover bg-dark-gray">
    //                     <thead>
    //                     <tr>
    //                         {/*[..Table Head.]*/}
    //                     </tr>
    //                     </thead>
    //                     <tbody>
                        
    //                     {customers.map(customer =>(
    //                         <tr className="table-dafault" key={customer.id}>
    //                             <th scope="row">{customer.nomveterinary.toUpperCase()}</th>
    //                             <td>{customer.contact}</td>
    //                             <td>{customer.adresse}</td>
    //                             <td>{customer.categorieveto}</td>
    //                             <td>{customer.governorate}</td>
    //                             <td>{customer.description}</td>
    //                             <td className="text-center">
                                
    //                             </td>
                                
                              
                                
    //                         </tr>)
    //                     )}
    //                     </tbody>
    //                 </table>
    //     </div>
 
//               );
// }
export default Customers;