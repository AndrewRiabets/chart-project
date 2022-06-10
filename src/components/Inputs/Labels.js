import React from 'react';
import './Inputs.css';

function Labels({ handleChange }) {
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const getLabelData = e => {
    const inputValue = e.target.value;
    const labelsToChart = inputValue.replace(/[.,]/g, '').split(' ');
    localStorage.setItem('labels', inputValue);
    handleChange(labelsToChart);
  };

  return (
    <div>
      <div className="text-field text-field_floating-2">
        <input
          className="text-field__input"
          id="labels"
          name="labels"
          placeholder="labels"
          defaultValue={window.localStorage.getItem('labels')}
          onBlur={getLabelData}
          onKeyDown={handleKeyDown}
        />
        <label className="text-field__label">labels</label>
      </div>
    </div>
  );
}

export default Labels;
