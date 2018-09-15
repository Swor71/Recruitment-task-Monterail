import React from 'react';
import './EventStart.css';

const EventStart = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="description">
      starts on
      <span className="form--red_star"> *</span>
    </label>
    <div>
      <input
        type="date"
        className="field--border-light"
        name="description"
        placeholder="Write about your event, be creative"
      />
      <span className="form__divider--margin-sides">at</span>
      <input type="time" name="time" />
      <label className="form__divider--margin-sides">
        <input type="radio" name="payment" value="free_event" />
        AM
      </label>
      <label>
        <input type="radio" name="payment" value="paid_event" />
        PM
      </label>
    </div>
  </div>
);

export default EventStart;
