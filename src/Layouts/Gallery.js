import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Gallery.css";

import CommentList from "../Components/CommentList";
import CommentForm from "../Components/CommentForm";
import axios from 'axios';
class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    axios.get('http://127.0.0.1:8000/getvetoComment').then((response)=> {
        this.setState({
       
        comments: response.data
        })
        .catch(err => {
            this.setState({ loading: false });
          });
    })
   
       
      
     
  }
 

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
         
          <h1 className="App-title">
            Veto Comments
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
         
        </header>

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about React</h6>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;