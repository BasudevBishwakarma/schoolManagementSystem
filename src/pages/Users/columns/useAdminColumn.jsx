import React from "react";
import { Tag } from "antd";

export const useAdminColumn = () => [
  {
    title: "USER ID",
    dataIndex: "userId",
    key: "userId",
    width: 100,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    width: 180,
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
    title: "ROLE",
    dataIndex: "role",
    key: "role",
    width: 150,
    render: (role) => (
      <Tag
        color={
          role === "Admin"
            ? "geekblue"
            : role === "Teacher"
            ? "green"
            : "orange"
        }
      >
        {role}
      </Tag>
    ),
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
