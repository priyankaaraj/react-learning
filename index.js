import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Hello from './Hello';
import GitUser from './gitusers'
import HelloPriyanka from './helloPriyanka'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      subject: 'Priyanka'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <HelloPriyanka subject = {this.state.subject}/>
        <GitUser/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
