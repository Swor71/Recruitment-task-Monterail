import React from 'react';
import './Duration.css';

const Duration = () => (
  <div className="form--flex ">
    <label className="form__label" htmlFor="duration">
      duration
    </label>
    <div className="font--small">
      <input className="form__duration_field field--border-light" type="number" placeholder="Number" />
      <span>hour(s)</span>
    </div>
  </div>
);

export default Duration;
