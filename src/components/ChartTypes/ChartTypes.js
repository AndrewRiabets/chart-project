import React from 'react';
import './chartTypes.css';

function ChartTypes({ handleChange }) {
  const onChartChoise = e => {
    handleChange(e.target.value);
  };
  return (
    <div onChange={onChartChoise}>
      <label className="chartType">
        <input type="radio" id="radio1" name="chartType" value="Bar" />
        Bar chart
      </label>
      <label className="chartType">
        <input type="radio" id="radio2" name="chartType" value="Line" />
        Line chart
      </label>
      <label className="chartType">
        <input type="radio" id="radio2" name="chartType" value="Pie" />
        Pie chart
      </label>
    </div>
  );
}

export default ChartTypes;
