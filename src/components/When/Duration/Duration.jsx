import React from 'react';

const Duration = props => (
  <div className="form--flex ">
    <label className="form__label" htmlFor="duration">
      duration
    </label>
    <div className="font--small">
      <input
        className="form__field--short field--border-light"
        type="number"
        placeholder="Number"
        onChange={e => props.onDurationChange(e)}
      />
      <span>hour(s)</span>
    </div>
  </div>
);

export default Duration;
