import React from 'react';
import employees from '../../../data/employees';

const Responsible = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="person" type="text" required={true}>
      responsible
    </label>
    <select className="form__field field--border-light" name="person">
      {employees.map(person => (
        <option key={person.id}>{`${person.name} ${person.lastname}`}</option>
      ))}
    </select>
  </div>
);

export default Responsible;
