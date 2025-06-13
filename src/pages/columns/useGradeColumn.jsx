import React from "react";
import { Tag, Dropdown, Menu, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";

export const useGradeColumns = ({ onEdit, onDelete }) => [
  {
    title: "GRADE NAME",
    dataIndex: "gradeName",
    key: "gradeName",
    width: 220,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    key: "description",
    width: 300,
    render: (text) => <span>{text}</span>,
  },
  {
    title: "CREATED DATE",
    dataIndex: "createdDate",
    key: "createdDate",
    width: 180,
    render: (date) => <span>{date}</span>,
    sorter: (a, b) =>
      new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime(),
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
  {
    key: "actions",
    width: 76,
    render: (_, record) => {
      const menu = (
        <Menu
          items={[
            {
              key: "edit",
              label: "Edit",
              onClick: () => onEdit(record),
            },
            {
              key: "delete",
              label: "Delete",
              danger: true,
              onClick: () => onDelete(record),
            },
          ]}
        />
      );

      return (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      );
    },
  },
];
