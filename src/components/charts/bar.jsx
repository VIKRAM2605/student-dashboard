import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import getData from "./Data";
const ChartExample = () => {
  const [options, setOptions] = useState({
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    background: {
        fill: 'rgba(241,240,234,255)',
    },
    data: getData(),
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey:"test01",
        yName:"test01"
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey:"test02",
        yName:"test02"
        
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey:"test03",
        yName:"test03"
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey:"test04",
        yName:"test04"
        
      },
      {
        type: "bar",
        xKey: "quarter",
       yKey:"test05",
       yName:"test05"
      },
    ],
  });

  return <AgCharts options={options} style={{ width: "500px", height: "300px" }}
  />;
};
export default ChartExample;
const root = createRoot(document.getElementById("root"));
root.render(<ChartExample />);