import React, { Component } from 'react';
import axios from 'axios'

export default class GitUser extends Component {
  state = {comments : []}
  render() {
    return (
      <div>
        <h5>Number of responses = {this.state.comments.length}</h5>
        { 
          this.state.comments.map(x => {
              return <li>{x.email}</li>
          })
        }
      </div>
    );  
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
    this.setState({comments : res.data})
    })
  }
}