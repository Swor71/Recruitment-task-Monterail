import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './containers/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Form />
      </div>
    );
  }
}

export default App;
