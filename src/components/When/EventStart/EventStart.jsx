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
      <input
        className="form__field--short field--border-light"
        type="time"
        name="time"
        min="00:00"
        max="12:00"
        pattern="[0-9]{2}:[0-9]{2}" //fallback for browsers that dont support type="time";
        required={true}
      />
      <label className="form__divider--margin-sides">
        <input type="radio" name="eventDate" value="am" required={true} />
        AM
      </label>
      <label>
        <input type="radio" name="eventDate" value="pm" required={true} />
        PM
      </label>
    </div>
  </div>
);

export default EventStart;
