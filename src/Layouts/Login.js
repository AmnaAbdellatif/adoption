import React from "react";
import classes from "./Login.module.css";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row
} from "reactstrap";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFocus: false,
            lastFocus: false,
            isAuth: false,
            redirectToEvents: false,
            username: "",
            password: ""
        }

    }
    
    

    handleSubmit = item => {
        const user = {
            username: this.username,
            password: this.password,
           
        }
        item.preventDefault();
       
       
        console.log(user);
        axios.post('http://127.0.0.1:8000/api/login',user)
            .then(response => {
                console.log(response);
                let dataa = response.data;
              
                    console.log('loading user...');
                    // this.props.loadUser(dataa);
                     this.setState({ redirectToEvents: true });
                    console.log('hedhi l data',response.data);
                    console.log('hedhi l token',response.data.token);
                    localStorage.setItem("token",response.data.token);
                  
                    //localStorage.setItem("token", response)
                
            })
            .catch(error => {
                console.log('fama error f retour ta3 axios post')
            })
            
    };
    render() {
        const redirectToEvents = this.state.redirectToEvents;
        if (redirectToEvents === true) {
            return < Redirect to="/Home" />
           
        }

        return (

            <>
                         <Navbar />
                <Row>
                    <Card className="card-signup" style={{ width: 950 ,marginLeft:245 ,backgroundColor: '#ffbf00' }}> {/*95b3b8 aaaaaa*/}
                        < Form onSubmit={this.handleSubmit}  className="form" method="">
                            <CardHeader className="text-center">
                                <CardTitle tag="h3" style={{ color: '#0040ff' }}>
                                    Sign In
                                </CardTitle>

                            </CardHeader>
                            <CardBody >
                                <InputGroup
                                    className={
                                        "no-border" + (this.state.firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input

                                        placeholder="Email..."
                                        type="username"
                                        onChange={(item) => { this.username= item.target.value }}
                                        onFocus={(item) => this.setState({ firstFocus: true })}
                                        onBlur={(item) => this.setState({ firstFocus: false })}
                                    ></Input>
                                </InputGroup>
                                <br />
                                <InputGroup
                                    className={
                                        "no-border" + (this.state.lastFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password..."
                                        type="password"
                                        onChange={(item) => { this.password= item.target.value }}
                                        onFocus={(item) => this.setState({ lastFocus: true })}
                                        onBlur={(item) => this.setState({ lastFocus: true })}
                                    ></Input>
                                </InputGroup> 
                                <br />
                                <strong className={classes.not}>
                                    Not a member?
                                <Link to="/signup" variant="body2">
                                        <strong> Create an account</strong>
                                    </Link>

                                </strong>
                                
                            </CardBody>
                            <CardFooter className="text-center">

                                <Button
                                    className="btn-round btn-neutral"
                                    color="Default"
                                    href="/"
                                    onClick={(item) => { this.handleSubmit(item) }}
                                    size="lg"
                                    style={{ color: '#0040ff' }} 
                                >
                                 Get Started
                      </Button>

                            </CardFooter>
                        </Form>
                    </Card>
                </Row >
                <Footer/>
            </>
            
        );
        
    }

}

export default LoginPage;