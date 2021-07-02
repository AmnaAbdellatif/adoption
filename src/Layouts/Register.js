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


class RegisterPage extends React.Component {
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
            username: this.email,
            password: this.password,
           
        }
        item.preventDefault();
        var data = new FormData();
        data.append('long', user);
       
        console.log(user);
        axios.post('http://127.0.0.1:8000/api/register',user)
            .then(response => {
                console.log('res',response.user);
                let dataa = response.data;
               
                    console.log('loading user...');
                    // this.props.loadUser(dataa);
                     this.setState({ redirectToEvents: true });
                
            })
            .catch(error => {
                console.log(error)
            })
    };
    
    render() {
        const redirectToEvents = this.state.redirectToEvents;
        if (redirectToEvents === true) {
            return <Redirect to="/login"/>
        }
       
        return (

            <>
                <Navbar />
                <Row>
                    <Card className="card-signup" style={{ width: 950 ,marginLeft:245 ,backgroundColor: '#ffbf00' }}> {/*95b3b8 aaaaaa*/}
                        < Form onSubmit={this.handleSubmit}  className="form" method="">
                            <CardHeader className="text-center">
                                <CardTitle tag="h3" style={{ color: '#0040ff' }}>
                                    Sign Up Now
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
                                        onChange={(item) => { this.email= item.target.value }}
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
                                

                            </CardBody>
                            <CardFooter className="text-center">

                                <Button
                                    className="btn-round btn-neutral"
                                    color="default"
                                    href="/"
                                    onClick={(item) => { this.handleSubmit(item) }}
                                    size="lg"
                                    style={{ color: '#0040ff' }} 
                                >
                                    Sign up
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

export default RegisterPage;