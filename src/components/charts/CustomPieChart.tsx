import { Pie } from "@ant-design/plots";
import React from "react";

const CustomPieChart = ({ data, angleField, colorField }) => {
  const config = {
    data,
    angleField,
    colorField,
    scale: {
      color: {
        range: ["#0077b6", "#00b4d8", "#90e0ef"],
      },
    },
    legend: {
      color: {
        title: false,
        position: "right", // Positioning the legend on the right
        rowPadding: 5, // Padding between rows in the legend
      },
    },
    // Custom color palette
    color: ["#5ECCF5", "#B6DA86"], // Customize the colors for each segment
  };

  return <Pie {...config} />;
};

export default CustomPieChart;
