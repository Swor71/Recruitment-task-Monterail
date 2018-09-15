import React from 'react';
import Canvas from '../Canvas/Canvas';
import Title from './Title/Title';
import Description from './Description/Description';
import Category from './Category/Category';
import Payment from './Payment/Payment';
import Reward from './Reward/Reward';

import './About.css';

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
