import React from 'react';

import './Description.css';

const Description = props => (
  <div className="form--flex">
    <label className="form__label" htmlFor="description">
      description
      <span className="form__star--red"> *</span>
    </label>
    <div>
      <textarea
        className="form__field field--border-light"
        name="description"
        placeholder="Write about your event, be creative"
        maxLength="140"
        required={true}
        onChange={e => props.onDescriptionChange(e)}
      />
      <div className="field__undertext--flex">
        <span>Max length 140 characters</span>
        <span>{`${props.letters}/140`}</span>
      </div>
    </div>
  </div>
);

export default Description;
