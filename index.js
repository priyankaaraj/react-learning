import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import GitUser from './gitusers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Priyanka'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <GitUser/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
