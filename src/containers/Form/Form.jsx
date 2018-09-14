import React, { Component } from 'react';
import About from '../../components/About/About';
import Coordinator from '../../components/Coordinator/Coordinator';
import When from '../../components/When/When';
import PublishButton from '../../components/PublishButton/PublishButton';

class Form extends Component {
  render() {
    return (
      <div>
        <About />
        <Coordinator />
        <When />
        <PublishButton />
      </div>
    );
  }
}

export default Form;
