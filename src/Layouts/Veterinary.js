
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Navbar from '../Components/Navbar';
import React, { useState ,useEffect} from 'react'
import Footer from '../Components/Footer';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
         margin: 'auto',
  },
  media: {
    height: 50,
    paddingTop: '70.25%', // 16:9
  },
  Card: {
    color:"orange",
  id:"cadId"
       

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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
 
    const cardInfo = [
      {
        nomveterinary: " Dr Aroua Khiari Mzabi",
        contact: "73254789",
        adresse: " Jawhara,Sousse,Tunisie",
        categorieveto:"Cabinet",
        governorate:"Sousse",
        description:"Docteur Aroua vous aide à prendre soin de votre animal",
      },
      {
      nomveterinary: " Dr Najeh chebaane",
      contact: "73789459",
      adresse: "  Hammam Sousse,Sousse",
      categorieveto:"Cabinet",
      governorate:"Sousse",
      description:"Docteur Najeh vous aide à prendre soin de votre animal",
      },
      {
        nomveterinary: "  Dr Med Salem Chemek",
        contact: "73789459",
        adresse: "   Sahloul,Sousse,Tunisie",
        categorieveto:"Clinique",
        governorate:"Sousse",
        description:"Docteur Chemek vous aide à prendre soin de votre animal",
        },
        {
        nomveterinary: "  clinique vétérinaire",
        contact: "73789222",
        adresse: "    Moknine,Monastir",
        categorieveto:"Clinique",
        governorate:"Monastir",
        description:"Clinique veto vous aide à prendre soin de votre animal",
        },
        {
          nomveterinary: " Amal medical center",
          contact: "73725272",
          adresse: " Monastir ville,Tunisie",
          categorieveto:"Clinique",
          governorate:"Monastir",
          description:"Clinique veto vous aide à prendre soin de votre animal",
          },
          {
            nomveterinary: " Veterinaire kharroubi naoufel",
            contact: "73725272",
            adresse: "   Route de la plage hammam sousse,Tunisie",
            categorieveto:"Cabinet",
            governorate:"Sousse",
            description:"Cabinet  veto vous aide à prendre soin de votre animal",
            },
      ];
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [filtereVeto, setFiltereVeto] = useState([]);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
        
        setFiltereVeto(
          cardInfo.filter((veto) =>
          veto.governorate.toLowerCase().includes(search.toLowerCase())
          )
        );
       
      }, [search, cardInfo]);
  const renderCard = (card, index) => {
   
  return (
    <div className="App">
    
    
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            DR 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6"  className={classes.title}     color="primary" gutterBottom>
          {card.nomveterinary}
       
           </Typography>}
      />
      
      <CardContent>
      <Typography variant="subtitle1" component="h2" color="primary" >
        Contact: {card.contact}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Address: {card.adresse}
        </Typography>
        <Typography variant="body2" component="p">
        Category:{card.categorieveto}
        </Typography>
        <Typography variant="body2" component="p">
       Governorate:{card.governorate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          Show description
        </IconButton>
        <IconButton
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
        <CardContent>
        <Typography variant="overline" component="p" color='textSecondary' >
     {card.description} <br/>
                                    
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
   
  );
      
};

return (
  <div> 
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
    
<div className="grid"> {cardInfo.map(renderCard)}</div>;
<div>
    <Footer/> </div>
</div>
  );
};
