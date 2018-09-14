import React from 'react';
import Canvas from '../Canvas/Canvas';
import employees from '../../data/employees';

import './Coordinator.css';

const Coordinator = () => {
  return (
    <Canvas title="Coordinator">
      <div className="flex">
        <label className="label" htmlFor="person" type="text" required="true">
          responsible
        </label>
        <select className="field" name="person">
          {employees.map(person => (
            <option>{`${person.name} ${person.lastname}`}</option>
          ))}
        </select>
      </div>
      <div className="flex">
        <label className="label" htmlFor="email">
          email
        </label>
        <input className="field" type="email" name="email" />
      </div>
    </Canvas>
  );
};

export default Coordinator;
