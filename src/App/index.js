import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Profile from '../Profile';

import './style.css';

class App extends Component {
  

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {

    return (
      <Router>
        <div className="App">
          
        <Profile />

        </div>
      </Router>
    );
  }
}

export default App;
