import React from "react";

export const useFeeStructureColumn = () => [
  {
    title: "FEE ID",
    dataIndex: "feeId",
    key: "feeId",
    width: 120,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "GRADE",
    dataIndex: "grade",
    key: "grade",
    width: 150,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "FEE TYPE",
    dataIndex: "feeType",
    key: "feeType",
    width: 160,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "AMOUNT",
    dataIndex: "amount",
    key: "amount",
    width: 130,
    render: (amount) => <span>Rs.{amount}</span>, // or `$${amount}` for USD
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: "FREQUENCY",
    dataIndex: "frequency",
    key: "frequency",
    width: 150,
    render: (text) => <span>{text}</span>,
  },
];
