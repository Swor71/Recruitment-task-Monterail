import React from 'react';

const Email = props => (
  <div className="form--flex">
    <label className="form__label" htmlFor="email">
      email
    </label>
    <input
      className="form__field field--border-light"
      type="email"
      name="email"
      placeholder="Email"
      onChange={e => props.onEmailChange(e)}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
    />
  </div>
);

export default Email;
