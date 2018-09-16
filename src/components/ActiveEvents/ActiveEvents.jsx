import React from 'react';
import SingleEvent from './SingleEvent/SingleEvent';

const ActiveEvents = props => props.events.map((event, key) => <SingleEvent key={key} event={event} />);

export default ActiveEvents;
