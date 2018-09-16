import React from 'react';
import Canvas from '../../Canvas/Canvas';

import './SingleEvent.css';

const SingleEvent = props => {
  const { event } = props;
  return (
    <Canvas title="Active event">
      <table>
        <tr>
          <th>Category</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Title:</td>
          <td>{event.title}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{event.description}</td>
        </tr>
        <tr>
          <td>Event category:</td>
          <td>{event.category_id}</td>
        </tr>
        <tr>
          <td>Paid event:</td>
          <td>{event.paid_event ? 'Yes' : 'No'}</td>
        </tr>
        {event.paid_event === true ? (
          <tr>
            <td>Event fee:</td>
            <td>{event.event_fee} $</td>
          </tr>
        ) : null}
        <tr>
          <td>Reward points:</td>
          <td>{event.reward}</td>
        </tr>
        <tr>
          <td>Event date:</td>
          <td>{event.date}</td>
        </tr>
        <tr>
          <td>Event duration:</td>
          <td>{event.duration / 3600}h</td>
        </tr>
        <tr>
          <td>Coordinator's ID:</td>
          <td>{event.coordinator.id}</td>
        </tr>
        <tr>
          <td>Your email:</td>
          <td>{event.coordinator.email}</td>
        </tr>
      </table>
    </Canvas>
  );
};

export default SingleEvent;
