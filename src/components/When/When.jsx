import React from 'react';
import Canvas from '../Canvas/Canvas';
import Duration from './Duration/Duration';
import EventStart from './EventStart/EventStart';

const When = () => {
  return (
    <Canvas title="When">
      <EventStart />
      <Duration />
    </Canvas>
  );
};

export default When;
