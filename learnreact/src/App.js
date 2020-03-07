import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        FULL STACK JAVA AND REACT APP
        <FirstComponent />
      </div>
    );
  }
}
// Class Component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
      FIRST COMPONENT
      </div>
    );
  }
}

export default App;