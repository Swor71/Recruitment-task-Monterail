import React from 'react';

const Email = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="email">
      email
    </label>
    <input className="form__field field--border-light" type="email" name="email" placeholder="Email" />
  </div>
);

export default Email;
