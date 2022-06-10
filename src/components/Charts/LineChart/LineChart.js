import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { options, backgroundColor, borderColor } from './lineChartOptions';

function LineChart({ labels, values }) {
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
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
