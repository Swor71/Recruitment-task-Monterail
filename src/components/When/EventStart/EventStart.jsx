import React from 'react';
import './EventStart.css';

const EventStart = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="description">
      starts on
      <span className="form__star--red"> *</span>
    </label>
    <div>
      <input className="form__field--medium field--border-light" type="date" name="date" required={true} />
      <span className="form__divider--margin-sides">at</span>
      <input className="form__field--short field--border-light" type="time" name="time" required={true} />
      <label className="form__divider--margin-sides">
        <input type="radio" name="eventDate" value="free_event" required={true} />
        AM
      </label>
      <label>
        <input type="radio" name="eventDate" value="paid_event" required={true} />
        PM
      </label>
    </div>
  </div>
);

export default EventStart;
