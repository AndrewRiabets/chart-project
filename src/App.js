import { useState } from 'react';
import BarChart from './components/Charts/BarChart/BarChart';
import LineChart from './components/Charts/LineChart/LineChart';
import PieChart from './components/Charts/PieChart/PieChart';
import Labels from './components/Inputs/Labels';
import Values from './components/Inputs/Values';
import ChartTypes from './components/ChartTypes/ChartTypes';
import './App.css';

function App() {
  const lSLabels = window.localStorage.getItem('labels');
  const lValues = window.localStorage.getItem('values');
  const [labelsData, setLabelsData] = useState(
    lSLabels ? lSLabels.split(' ') : [],
  );
  const [valuesData, setValuesData] = useState(
    lValues ? lValues.split(' ') : [],
  );
  const [chartType, setChartType] = useState('Bar');

  const renderChartType = () => {
    switch (chartType) {
      case 'Bar':
        return <BarChart labels={labelsData} values={valuesData} />;
      case 'Line':
        return <LineChart labels={labelsData} values={valuesData} />;
      case 'Pie':
        return <PieChart labels={labelsData} values={valuesData} />;
      default:
        break;
    }
  };
  return (
    <div className="container">
      <h1 className="title">Enter data to create a chart</h1>
      <Labels handleChange={setLabelsData} />
      <Values handleChange={setValuesData} />
      {renderChartType()}
      <ChartTypes handleChange={setChartType} />
    </div>
  );
}

export default App;
