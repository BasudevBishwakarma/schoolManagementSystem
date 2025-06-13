import { Column } from "@ant-design/plots";
import React from "react";

const CustomColumnChart = ({ data, xField, yField, colorField }) => {
  const config = {
    data,
    xField,
    yField,
    stack: true,
    colorField,
    legend: {
      color: {
        position: "top",
        itemMarker: "circle",
        layout: {
          justifyContent: "flex-end", // aligns to right
          alignItems: "center",
          flexDirection: "row", // horizontal
        },
        itemSpacing: 16,
      },
    },
    style: {
      maxWidth: 32,
    },
    scale: {
      color: {
        range: ["#90e0ef", "#0077b6"],
      },
    },
  };

  return <Column {...config} />;
};

export default CustomColumnChart;
