import React from "react";
import ChartCPU from "./ChartCPU";
import ChartAnomalyCPU from "./ChartAnomalyCPU";

const Chart = props => {
  switch (props.type) {
    case "cpu":
      return <ChartCPU socketConnection={props.socketConnection} />;
    case "cpuAnomaly":
      return <ChartAnomalyCPU socketConnection={props.socketConnection} />;
    default:
      return <h1>Nothing to Display</h1>;
  }
};

export default Chart;
