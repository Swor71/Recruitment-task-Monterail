import React from 'react';
import './EventStart.css';
import moment from 'moment/moment';

const EventStart = props => {
  return (
    <div className="form--flex">
      <label className="form__label" htmlFor="description">
        starts on
        <span className="form__star--red"> *</span>
      </label>
      <div>
        <input
          className="form__field--medium field--border-light"
          type="date"
          name="date"
          required={true}
          min={moment().format('YYYY-MM-DD')}
          onChange={e => props.onDateChange(e)}
        />
        <span className="form__divider--margin-sides">at</span>
        <input
          className="form__field--short field--border-light"
          type="time"
          name="time"
          min="00:00"
          max="12:00"
          pattern="[0-9]{2}:[0-9]{2}"
          required={true}
          onChange={e => props.onTimeChange(e)}
        />
        <label className="form__divider--margin-sides">
          <input type="radio" name="eventDate" value="AM" required={true} onChange={e => props.onTimeOfDayChange(e)} />
          AM
        </label>
        <label>
          <input type="radio" name="eventDate" value="PM" required={true} onChange={e => props.onTimeOfDayChange(e)} />
          PM
        </label>
      </div>
    </div>
  );
};

export default EventStart;
