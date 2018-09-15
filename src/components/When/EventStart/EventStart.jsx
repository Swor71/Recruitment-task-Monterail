import React from 'react';
import './EventStart.css';

const EventStart = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="description">
      starts on
      <span className="form--red_star"> *</span>
    </label>
    <div>
      <input className="form__field--medium field--border-light" type="date" name="date" />
      <span className="form__divider--margin-sides">at</span>
      <input className="form__field--short field--border-light" type="time" name="time" />
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
