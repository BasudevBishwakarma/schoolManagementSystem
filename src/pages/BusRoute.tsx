import React from "react";
import TableSearch from "../components/Table/TableSearch";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AppTable from "../components/Table";
import { useBusRouteColumn } from "./columns/useBusRouteColumn";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

const BusRoute = () => {
  const columns = useBusRouteColumn();
  const [busRouteData, setBusRouteData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchBusRoute = async () => {
    try {
      const res = await axios.get("http://localhost:3000/busRoute");
      setBusRouteData(res.data);
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  const filteredBusRoute = useMemo(() => {
    if (!searchKeyword) return busRouteData;

    const lowerKeyword = searchKeyword.toLowerCase();

    return busRouteData.filter((item) => {
      return (
        item.routeName.toLowerCase().includes(lowerKeyword) ||
        item.driverName.toLowerCase().includes(lowerKeyword) ||
        item.busNumber.toLowerCase().includes(lowerKeyword) ||
        item.stops.some((stop) => stop.toLowerCase().includes(lowerKeyword))
      );
    });
  }, [searchKeyword, busRouteData]);

  useEffect(() => {
    fetchBusRoute();
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
            Add Bus Route
          </Button>
        </div>
        <div className="">
          <AppTable
            columns={columns}
            dataSource={filteredBusRoute}
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

export default BusRoute;
