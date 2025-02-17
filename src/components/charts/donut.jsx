import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import getDatas from "./datas";
import "./donut.css"
const ChartExample2 = () => {
  const [options, setOptions] = useState({
    data: getDatas(),
    title: {
      text: "",
    },
    background: {
        fill: 'rgba(44,55,60,255)',
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.7,
      },
    ],
  });

  return (
    <div className="donut" style={{display:"grid"}}>
      <AgCharts options={options} />
    </div>
  );
};
export default ChartExample2;
const root = createRoot(document.getElementById("root"));
root.render(<ChartExample2 />);
