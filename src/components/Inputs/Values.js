import React, { useState } from 'react';
import './Inputs.css';

function Values({ handleChange }) {
  const [errorMessage, setErrorMessage] = useState(false);
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
    if (e.key.match(/^[A-Za-z]+$/)) {
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 3000);
    }
  };

  const getValueData = e => {
    const inputValue = e.target.value.replace(/[.,s]/g, '');
    const valuesToChart = inputValue.split(' ');
    localStorage.setItem('values', inputValue);
    handleChange(valuesToChart);
  };

  return (
    <div className="labels-data-container">
      <div className="text-field text-field_floating-2">
        <input
          className="text-field__input"
          id="values"
          name="values"
          placeholder="values"
          onBlur={getValueData}
          onKeyDown={handleKeyDown}
          defaultValue={window.localStorage.getItem('values')}
        />
        <label className="text-field__label">values</label>
        {errorMessage && (
          <p className="errorMessage">Please enter only whole numbers!</p>
        )}
      </div>
    </div>
  );
}

export default Values;
