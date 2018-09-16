import React, { Component, Fragment } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Coordinator from '../../components/Coordinator/Coordinator';
import When from '../../components/When/When';
import PublishButton from '../../components/PublishButton/PublishButton';
import Message from '../../components/Message/Message';
import NewEventButton from '../../components/NewEventButton/NewEventButton';

import { connect } from 'react-redux';
import { submitEvent, newEvent } from '../../actions/formActions';
import moment from 'moment/moment';

import './Form.css';

class Form extends Component {
  handleOnSubmit(e) {
    e.preventDefault();

    const {
      description,
      paid_event,
      title,
      category_id,
      event_fee,
      reward,
      duration,
      email,
      id,
      day,
      time,
      timeOfDay
    } = this.props;

    let date = moment(`${day}${time}${timeOfDay}`, ['YYYY-MM-DDTHH:mm A']).format('YYYY-MM-DDTHH:mm');

    const output = {
      title,
      description,
      category_id,
      paid_event,
      event_fee,
      reward,
      date,
      duration,
      coordinator: {
        email,
        id
      }
    };

    console.log(output);

    this.props.dispatch(submitEvent(output));
  }

  handleNewEvent() {
    this.props.dispatch(newEvent());
  }

  render() {
    const { submited } = this.props;

    return (
      <div className="App">
        <Navbar />

        {!submited ? (
          <form onSubmit={e => this.handleOnSubmit(e)} className="form">
            <About />
            <Coordinator />
            <When />
            <PublishButton />
          </form>
        ) : (
          <Fragment>
            <Message />
            <NewEventButton newEvent={() => this.handleNewEvent()} />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.aboutReducer.description,
  paid_event: state.aboutReducer.paid_event,
  title: state.aboutReducer.title,
  category_id: state.aboutReducer.category_id,
  event_fee: state.aboutReducer.event_fee,
  reward: state.aboutReducer.reward,

  email: state.coordinatorReducer.coordinator.email,
  id: state.coordinatorReducer.coordinator.id,

  duration: state.whenReducer.duration,
  day: state.whenReducer.day,
  time: state.whenReducer.time,
  timeOfDay: state.whenReducer.timeOfDay,

  submited: state.formReducer.submited
});

export default connect(mapStateToProps)(Form);
