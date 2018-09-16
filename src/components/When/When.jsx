import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import Duration from './Duration/Duration';
import EventStart from './EventStart/EventStart';
import { connect } from 'react-redux';
import moment from 'moment/moment';

import { durationChange, dateChange, timeChange, timeOfDayChange } from '../../actions/whenActions';

class When extends Component {
  handleDateChange(e) {
    let date = e.target.value;
    this.props.dispatch(dateChange(date));
  }

  handleTimeChange(e) {
    let time = e.target.value;
    this.props.dispatch(timeChange(time));
  }

  handleTimeOfDayChange(e) {
    let timeOfDay = e.target.value;
    this.props.dispatch(timeOfDayChange(timeOfDay));
  }

  handleDurationChange(e) {
    let duration = parseInt(e.target.value, 10);
    let asSeconds = moment.duration(duration, 'hours').asSeconds();
    this.props.dispatch(durationChange(asSeconds));
  }

  render() {
    return (
      <Canvas title="When">
        <EventStart
          onDateChange={e => this.handleDateChange(e)}
          onTimeChange={e => this.handleTimeChange(e)}
          onTimeOfDayChange={e => this.handleTimeOfDayChange(e)}
        />
        <Duration onDurationChange={e => this.handleDurationChange(e)} />
      </Canvas>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(When);
