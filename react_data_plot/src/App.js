import React, { Component } from "react";
import CanvasJSReact from "../src/assets/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dps = [
  { x: 1, y: 100 },
  { x: 2, y: 130 },
  { x: 3, y: 180 },
  { x: 4, y: 200 },
  { x: 5, y: 170 },
  { x: 6, y: 100 },
  { x: 7, y: 130 },
  { x: 8, y: 180 },
  { x: 9, y: 200 },
  { x: 10, y: 170 },
];

let xVal = dps.length + 1;
let yVal = 15;

const updateInterval = 1000;

class App extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
  }
  componentDidMount() {
    setInterval(this.updateChart, updateInterval);
  }
  updateChart() {
    yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
    dps.push({ x: xVal, y: yVal });
    xVal++;
    if (dps.length > 10) {
      dps.shift();
    }
    this.chart.render();
  }

  render() {
    const options = {
      title: {
        text: "City Science Traffic Flow Live Chart",
      },
      data: [
        {
          type: "line",
          dataPoints: dps,
        },
      ],
    };
    return (
      <>
        <div>
          {/* <div>{options.title.text}</div> */}
          <CanvasJSChart
            options={options}
            onRef={(ref) => (this.chart = ref)}
          />

          {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
        </div>
        <div>
          {/* <HeatMap /> */}
          {/* <CanvasJSChart
            options={options}
            onRef={(ref) => (this.chart = ref)}
          /> */}
        </div>
      </>
    );
  }
}

// module.exports = App;
export default App;
