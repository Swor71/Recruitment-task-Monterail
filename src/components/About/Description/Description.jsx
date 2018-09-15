import React from 'react';

import './Description.css';

const Description = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="description">
      description
      <span className="form--red_star"> *</span>
    </label>
    <div>
      <textarea
        className="form__field field--border-light"
        name="description"
        placeholder="Write about your event, be creative"
        maxLength="140"
        required={true}
      />
      <div className="field__undertext--flex">
        <span>Max length 140 characters</span>
        <span>0/140</span>
      </div>
    </div>
  </div>
);

export default Description;
