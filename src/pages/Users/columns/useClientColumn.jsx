import React from "react";
import { Tag } from "antd";

export const useClientColumn = () => [
  {
    title: "CLIENT ID",
    dataIndex: "clientId",
    key: "clientId",
    width: 120,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "SCHOOL NAME",
    dataIndex: "schoolName",
    key: "schoolName",
    width: 220,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "CONTACT PERSON",
    dataIndex: "contactPerson",
    key: "contactPerson",
    width: 200,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    width: 250,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "STATUS",
    dataIndex: "isEnabled",
    key: "isEnabled",
    width: 120,
    render: (isEnabled) => {
      const color = isEnabled ? "green" : "volcano";
      const label = isEnabled ? "Active" : "Inactive";
      return <Tag color={color}>{label}</Tag>;
    },
  },
];
