import { keys } from '@material-ui/core/styles/createBreakpoints';
import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import axios from 'axios' ;
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
import Footer from '../Components/Footer';
import Search from '../Components/Search.css';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import { FaRegIdCard } from 'react-icons/fa';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import { InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
const SampleComponent = () => {
  

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
    const [VetoName,setVetoName]=useState("");
    const [VetoContact,setVetoContact]=useState("");
    const [VetoAdresse,setVetoAdresse]=useState("");
    const [VetoCategorie,setVetoCategorie]=useState("");
    const [VetoDescription,setVetoDescription]=useState("");
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [VetoList,setVetoList]=useState([]);
    const [Commentveto,setCommentveto]=useState([]);
    const[searchField,setsearchField]=useState("");
    const [filtereVeto, setFiltereVeto] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    

    // const config  = {
    //   headers :{
    //     Authorization : localStorage.getItem('token')
    //   }

    // };
    
    
    useEffect(() => {
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/veterinaries/', { headers: {"Authorization": `Bearer ${localStorage.getItem(`token`)}`}})
        .then((response) => {
        console.log(response.data);
        this.veterinaries = response.data['hydra:member'];
        setVetoList(response.data);
        setVetoList("veto listt", response.data['hydra:member']);
      
           setLoading(false);
           console.log("hethi data veto",response.data['hydra:member']);
          
         
    })
    .catch(error => {
      console.log('fama error f retour veto ta3 axios')
  })
    },[] ,);
  
    // useEffect(() => {
        
    //     setFiltereVeto(
    //       VetoList.filter((veto) =>
    //       veto.governorate.toLowerCase().includes(search.toLowerCase())
    //       )
    //     );
       
    //   }, [search, VetoList]);

  
      
   
      if (loading) {
        return <p>Loading veterinaries...</p>;
      }
  
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
  <Box my={3} className={classes.paginationContainer}>
          <Pagination count={4} />
        </Box>
           {/* <div class="alert">
       <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
       <strong></strong> No Result found
     </div>   */}  
     
    <div>
    <Footer/> </div>

</div>



 
);


               
          
           

              }
    export default SampleComponent;



