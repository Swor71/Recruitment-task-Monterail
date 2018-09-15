import React from 'react';

const Reward = () => (
  <div className="form--flex ">
    <label className="form__label" htmlFor="reward">
      reward
    </label>
    <div className="font--small">
      <input className="form__field--short field--border-light" type="number" placeholder="Number" />
      <span>reward points for attendance</span>
    </div>
  </div>
);

export default Reward;
