import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxvalue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
