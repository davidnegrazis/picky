import React, { Component } from 'react';
import bag from '../../bag.png';
import Login from '../Basic/Login';
import '../../App.css';

var RouteHandler = require('react-router').RouteHandler;  

class EntryScreen extends Component {
  render() {
    return (
      <div className="App">
        <div className="Front-page">
          <div className="App-header">
            <img src={bag} className="App-logo" alt="logo" />
            <h2>Welcome to Picky</h2>
          </div>
          <Login />
        </div>
      </div>
    );
  }
}

export default EntryScreen;
