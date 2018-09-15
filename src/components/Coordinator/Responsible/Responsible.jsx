import React from 'react';
import employees from '../../../data/employees';

const Responsible = () => (
  <div className="form--flex">
    <label className="form__label" htmlFor="person" type="text">
      responsible
      <span className="form__star--red"> *</span>
    </label>
    <select className="form__field field--border-light" name="person" required={true}>
      <option className="form__select_field--placeholder" value="" default>
        Select Coordinator
      </option>
      <optgroup label="Me">
        <option value="volvo">props</option>
      </optgroup>
      <optgroup label="Others">
        {employees.map(person => (
          <option key={person.id} value={person.id}>{`${person.name} ${person.lastname}`}</option>
        ))}
      </optgroup>
    </select>
  </div>
);

export default Responsible;
