import React, { Component } from 'react';
import About from '../../components/About/About';
import Coordinator from '../../components/Coordinator/Coordinator';
import When from '../../components/When/When';
import PublishButton from '../../components/PublishButton/PublishButton';
import Navbar from '../../components/Navbar/Navbar';

import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <form className="form">
          <About />
          <Coordinator />
          <When />
          <PublishButton />
        </form>
      </div>
    );
  }
}

export default Form;
