import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useMemo } from "react";
import TableSearch from "../components/Table/TableSearch";
import AppTable from "../components/Table";
import { useFeeStructureColumn } from "./columns/useFeeStructureColumn";
import axios from "axios";
import { useState } from "react";

const FeeStructure = () => {
  const [feeStructureData, setFeeStructureData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const columns = useFeeStructureColumn();

  const fetchFeeStructure = async () => {
    try {
      const res = await axios.get("http://localhost:3000/feeStructure");
      setFeeStructureData(res.data);
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  const filteredStudents = useMemo(() => {
    if (!searchKeyword) return feeStructureData;
    return feeStructureData.filter((item) =>
      item?.grade.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword, feeStructureData]);

  useEffect(() => {
    fetchFeeStructure();
  }, []);

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
            Add Students
          </Button>
        </div>
        <div className="">
          <AppTable
            columns={columns}
            dataSource={filteredStudents}
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

export default FeeStructure;
