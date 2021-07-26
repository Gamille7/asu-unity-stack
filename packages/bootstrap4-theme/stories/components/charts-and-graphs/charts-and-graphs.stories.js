import React from 'react';
import { createComponent, createStory } from '../../../helpers/wrapper.js'
import { initChart } from './charts-and-graphs';

export default createComponent('Charts And Graphs');


const DonutChartMarkUp = (
  <div class="container p-5">
    <div class="justify-content-center">
      <div class="uds-charts-and-graphs-container">
        <div class="uds-charts-and-graphs-overlay">
          <h4 id="percentage-display"></h4>
          <span>Fact goes here</span>
        </div>
        <canvas id="uds-donut"></canvas>
      </div>
    </div>
  </div>
);



class DonutChart extends React.Component {

  componentDidMount() {
    initChart();
  }

  render() {
    return DonutChartMarkUp;
  }
}

const ExampleStory = (
  <div>
    <DonutChart />
  </div>
)

export const BasicDonutChart = createStory(ExampleStory);

