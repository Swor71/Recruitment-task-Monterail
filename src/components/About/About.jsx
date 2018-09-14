import React from 'react';
import Canvas from '../Canvas/Canvas';

import './About.css';
import Category from './Category/Category';
import Description from './Description/Description';
import Title from './Title/Title';
import Payment from './Payment/Payment';
import Reward from './Reward/Reward';

const About = () => {
  return (
    <Canvas title="About">
      <Title />
      <Description />
      <Category />
      <Payment />
      <Reward />
    </Canvas>
  );
};

export default About;
