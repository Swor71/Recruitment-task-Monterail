import React from 'react';

const Title = () => (
  <div className="form--flex ">
    <label className="form__label">
      title
      <span className="form__star--red"> *</span>
    </label>
    <input
      className="form__field field--border-light"
      type="text"
      name="title"
      placeholder="Make it short and clear"
      required={true}
    />
  </div>
);

export default Title;
