import React from 'react';

const Duration = () => (
  <div className="form--flex ">
    <label className="form__label" htmlFor="duration">
      duration
    </label>
    <div className="font--small">
      <input className="form__field--short field--border-light" type="number" placeholder="Number" />
      <span>hour(s)</span>
    </div>
  </div>
);

export default Duration;
