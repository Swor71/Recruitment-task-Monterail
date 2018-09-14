import React from 'react';

const Description = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="description">
      description
    </label>
    <div>
      <textarea
        className="form__field field--border-light"
        style={{ height: '100px' }}
        name="description"
        placeholder="Write about your event, be creative"
      />
      <div className="field__undertext--flex">
        <span>Max length 140 characters</span>
        <span>0/140</span>
      </div>
    </div>
  </div>
);

export default Description;
