import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { options, backgroundColor, borderColor } from './barChartOptions';
import '../charts.css';

function BarChart({ labels, values }) {
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
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
