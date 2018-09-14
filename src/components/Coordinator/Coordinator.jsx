import React from 'react';
import Canvas from '../Canvas/Canvas';

import Responsible from './Responsible/Responsible';
import Email from './Email/Email';

const Coordinator = () => {
  return (
    <Canvas title="Coordinator">
      <Responsible />
      <Email />
    </Canvas>
  );
};

export default Coordinator;
