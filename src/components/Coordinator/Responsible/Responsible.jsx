import React from 'react';
import employees from '../../../data/employees';

const Responsible = props => (
  <div className="form--flex">
    <label className="form__label" htmlFor="person" type="text">
      responsible
      <span className="form__star--red"> *</span>
    </label>
    <select
      className="form__field field--border-light"
      name="person"
      required={true}
      onChange={e => props.onCoordinatorIdChange(e)}
    >
      <optgroup label="Me">
        <option value={props.loggedInID} defaultValue>{`${employees[props.loggedInID].name} ${
          employees[props.loggedInID].lastname
        }`}</option>
      </optgroup>
      <optgroup label="Others">
        {employees.map(
          person =>
            person.id === props.loggedInID ? null : (
              <option key={person.id} value={person.id}>{`${person.name} ${person.lastname}`}</option>
            )
        )}
      </optgroup>
    </select>
  </div>
);

export default Responsible;
