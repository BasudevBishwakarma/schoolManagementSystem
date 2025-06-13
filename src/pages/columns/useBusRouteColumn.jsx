import React from "react";

export const useBusRouteColumn = () => [
  {
    title: "ROUTE ID",
    dataIndex: "routeId",
    key: "routeId",
    width: 120,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "ROUTE NAME",
    dataIndex: "routeName",
    key: "routeName",
    width: 280,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "DRIVER NAME",
    dataIndex: "driverName",
    key: "driverName",
    width: 200,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "BUS NUMBER",
    dataIndex: "busNumber",
    key: "busNumber",
    width: 160,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "STOPS",
    dataIndex: "stops",
    key: "stops",
    width: 150,
    render: (stops) =>
      Array.isArray(stops) ? (
        <span>{stops.join(", ")}</span>
      ) : (
        <span>{stops}</span>
      ),
  },
];
