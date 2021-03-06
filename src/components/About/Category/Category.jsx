import React from 'react';
import categories from '../../../data/categories';

const Category = props => (
  <div className="form--flex ">
    <label className="form__label" htmlFor="category">
      category
    </label>
    <div>
      <select
        className="form__field field--border-light"
        name="category"
        placeholder="Select category"
        required={true}
        onChange={e => props.onCategoryChange(e)}
      >
        <option className="form__select_field--placeholder" value="" default>
          Select Category
        </option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <span className="field__undertext--flex">Describes topic and people who should be interested in this event</span>
    </div>
  </div>
);

export default Category;
