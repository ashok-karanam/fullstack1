import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'; 
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LearningComponents />
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="App">
        FULL STACK JAVA AND REACT APP
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}



export default App;