import React, { useEffect } from "react";
import AppTable from "../../../components/Table";
import { Button } from "antd";
import TableSearch from "../../../components/Table/TableSearch";
import axios from "axios";
import { useState } from "react";
import { useClientColumn } from "../columns/useClientColumn";
import { PlusOutlined } from "@ant-design/icons";
import { useMemo } from "react";

const Client = () => {
  const [clientData, setClientData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const columns = useClientColumn();

  const fetchClient = async () => {
    try {
      const res = await axios.get("http://localhost:3000/clientUser");
      setClientData(res.data);
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  const filteredClient = useMemo(() => {
    if (!searchKeyword) return clientData;

    const lowerKeyword = searchKeyword.toLowerCase();

    return clientData.filter((item) => {
      return (
        item.schoolName.toLowerCase().includes(lowerKeyword) ||
        item.contactPerson.toLowerCase().includes(lowerKeyword) ||
        item.email.toLowerCase().includes(lowerKeyword)
      );
    });
  }, [searchKeyword, clientData]);

  useEffect(() => {
    fetchClient();
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
            dataSource={filteredClient}
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

export default Client;
