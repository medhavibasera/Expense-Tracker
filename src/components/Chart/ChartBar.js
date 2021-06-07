import React from "react";
import "./ChartBar.css";
function ChartBar(props) {
    let barFillHeight="0%"
    if(props.max>0)
    {
        barFillHeight=Math.round((props.value/props.maxvalue)*100)+
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="chart-bar__label"></div>
    </div>
  );
}
export default ChartBar;
