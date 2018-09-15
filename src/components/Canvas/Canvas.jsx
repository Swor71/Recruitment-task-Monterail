import React from 'react';
import './Canvas.css';

const Canvas = props => {
  return (
    <div className="canvas">
      <h3 className="canvas__title">{props.title}</h3>
      <div className="canvas__content">{props.children}</div>
      <span className="form__star--red font--small pos--absolute">* - field required</span>
    </div>
  );
};

export default Canvas;
