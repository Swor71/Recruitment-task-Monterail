import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import Responsible from './Responsible/Responsible';
import Email from './Email/Email';
import { connect } from 'react-redux';

import { emailChange, coordinatorIdChange } from '../../actions/coordinatorActions';

class Coordinator extends Component {
  handleEmailChange(e) {
    let email = e.target.value;
    this.props.dispatch(emailChange(email));
  }

  handleCoordinatorIdChange(e) {
    let id = e.target.value;
    this.props.dispatch(coordinatorIdChange(id));
  }

  render() {
    const { loggedInID } = this.props;
    return (
      <Canvas title="Coordinator">
        <Responsible loggedInID={loggedInID} onCoordinatorIdChange={e => this.handleCoordinatorIdChange(e)} />
        <Email onEmailChange={e => this.handleEmailChange(e)} />
      </Canvas>
    );
  }
}

const mapStateToProps = state => ({
  loggedInID: state.coordinatorReducer.loggedInID
});

export default connect(mapStateToProps)(Coordinator);
