import React from 'react';
import './PublishButton.css';

const PublishButton = props => {
  return (
    <input
      type="submit"
      name="publishEvent"
      value="publish event"
      className="publishButton"
      onSubmit={e => props.onSubmit(e)}
    />
  );
};

export default PublishButton;
