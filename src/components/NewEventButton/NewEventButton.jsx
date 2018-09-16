import React from 'react';
import './NewEventButton.css';

const NewEventButton = props => (
  <button onClick={() => props.newEvent()} className="new_event_button">
    create new event
  </button>
);

export default NewEventButton;
