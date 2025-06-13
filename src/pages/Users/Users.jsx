import { Tabs } from "antd";
import React from "react";
import Admin from "./components/Admin";
import Client from "./components/Client";

const menuItem = [
  {
    label: "Admin",
    key: "ADMIN",
    children: <Admin />,
  },
  {
    label: "Client",
    key: "CLIENT",
    children: <Client />,
  },
];

const Users = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="line"
        size={"middle"}
        style={{ marginBottom: 32 }}
        items={menuItem}
      />
    </div>
  );
};

export default Users;
