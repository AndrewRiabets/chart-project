import React from 'react';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { options, backgroundColor, borderColor } from './PieChartOptions';

function PieChart({ labels, values }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Info chart',
        backgroundColor,
        borderColor,
        borderWidth: 1,
        data: values,
      },
    ],
  };
  return (
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
