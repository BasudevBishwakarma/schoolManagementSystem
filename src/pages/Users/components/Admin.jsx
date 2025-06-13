import React from "react";
import TableSearch from "../../../components/Table/TableSearch";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AppTable from "../../../components/Table";
import { useAdminColumn } from "../columns/useAdminColumn";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

const Admin = () => {
  const columns = useAdminColumn();
  const [adminData, setAdminData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:3000/adminUser");
      setAdminData(res.data);
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  const filteredAdmin = useMemo(() => {
    if (!searchKeyword) return adminData;

    const lowerKeyword = searchKeyword.toLowerCase();

    return adminData.filter((item) => {
      return (
        item.name.toLowerCase().includes(lowerKeyword) ||
        item.email.toLowerCase().includes(lowerKeyword) ||
        item.role.toLowerCase().includes(lowerKeyword)
      );
    });
  }, [searchKeyword, adminData]);

  useEffect(() => {
    fetchAdmin();
  });

  return (
    <div>
      <div className="mt-5 space-y-[12px]">
        <div className="flex justify-between items-center">
          <TableSearch setSearchKeyword={setSearchKeyword} />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="w-[148px]"
            style={{ height: 44 }}
          >
            Add Bus Route
          </Button>
        </div>
        <div className="">
          <AppTable
            columns={columns}
            dataSource={filteredAdmin}
            rowKey="userId"
            pagination={{
              pageSize: 9,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} items`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
