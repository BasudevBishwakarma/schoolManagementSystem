import React from "react";
import { Button, Tag, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export const useStudentColumns = ({ onEdit, onDelete }) => [
  {
    title: "Student ID",
    dataIndex: "studentId",
    key: "studentId",
    width: 120,
  },
  {
    title: "Name",
    key: "name",
    width: 200,
    render: (record) => <span>{`${record.firstName} ${record.lastName}`}</span>,
  },
  {
    title: "Grade",
    dataIndex: "grade",
    key: "grade",
    width: 120,
  },
  {
    title: "Contact Number",
    dataIndex: "contactNumber",
    key: "contactNumber",
    width: 150,
  },
  {
    title: "Status",
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
