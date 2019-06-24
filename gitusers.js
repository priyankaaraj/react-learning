import React, { Component } from 'react';
import axios from 'axios'

export default class GitUser extends Component {
  state = {posts : []}
  render() {
    return (
      <div>
        length = {this.state.posts.length}
        { 
          this.state.posts.map(x => {
              return <li>{x.body}</li>
          })
        }
      </div>
    );  
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
    this.setState({posts : res.data})
    })
  }
}