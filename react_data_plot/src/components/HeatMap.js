import h337 from "heatmap.js";
import React, { useEffect } from "react";

// import "./styles.css";

function HeatMap() {
  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector(".App"),
    });
    // now generate some random data
    var points = [];
    var max = 0;
    var width = 840;
    var height = 400;
    var len = 200;

    while (len--) {
      var val = Math.floor(Math.random() * 100);
      max = Math.max(max, val);
      var point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val,
      };
      points.push(point);
    }
    // heatmap data format
    var data = {
      max: max,
      data: points,
    };
    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);
  });

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default HeatMap;
