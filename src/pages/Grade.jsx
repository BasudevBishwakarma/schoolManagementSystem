import React from "react";
import TableSearch from "../components/Table/TableSearch";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AppTable from "../components/Table";
import { useGradeColumns } from "./columns/useGradeColumn";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import axios from "axios";
import AddGradeModal from "./models/AddGradeModal";
import { message } from "antd";
import DeleteConfirmModal from "./models/DeleteConfimationModal";

const Grade = () => {
  const columns = useGradeColumns({ onEdit, onDelete });

  const [isModalOpen, setModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [gradeData, setGradeData] = useState([]);
  const [gradeId, setGradeId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Filtered Data
  const filteredGrades = useMemo(() => {
    if (!searchKeyword) return gradeData;
    return gradeData.filter((grade) =>
      grade.gradeName?.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword, gradeData]);

  const handleAddGrade = async (gradeData) => {
    try {
      if (gradeId) {
        // Update existing grade
        await axios.put(`http://localhost:3000/grade/${gradeId}`, gradeData);
        message.success("Grade updated successfully");
      } else {
        // Create new grade
        await axios.post("http://localhost:3000/grade", gradeData);
        message.success("Grade added successfully");
      }
      await fetchGrades();
    } catch (error) {
      message.error(`Failed to ${gradeId ? "update" : "add"} grade`);
      console.error("Error submitting grade:", error);
    }
  };

  const fetchGrades = async () => {
    try {
      const res = await axios.get("http://localhost:3000/grade");
      setGradeData(res.data);
      handleCancel();
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  const handleDelete = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const res = await axios.delete(`http://localhost:3000/grade/${gradeId}`);
      setGradeData(res.data);
      handleCancel();
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  function onEdit(data) {
    setGradeId(data?.id);
    setModalOpen(true);
  }
  function onDelete(data) {
    setGradeId(data?.id);
    setIsDeleteModalOpen(true);
  }

  function handleCancel() {
    setModalOpen(false);
    setGradeId(null);
  }
  useEffect(() => {
    fetchGrades();
  }, []);

  return (
    <div>
      {" "}
      <div className="mt-5 space-y-[12px]">
        <div className="flex justify-between items-center">
          <TableSearch setSearchKeyword={setSearchKeyword} />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="w-[148px]"
            style={{ height: 44 }}
            onClick={() => setModalOpen(true)}
          >
            Add User
          </Button>
        </div>
        <div className="">
          <AppTable
            columns={columns}
            dataSource={filteredGrades}
            // loading={loading}
            rowKey="userId"
            pagination={{
              pageSize: 9,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} items`,
            }}
          />
        </div>
      </div>
      <AddGradeModal
        isOpen={isModalOpen}
        handleCancel={handleCancel}
        onSubmit={handleAddGrade}
        gradeId={gradeId}
      />
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName="Grade"
      />
    </div>
  );
};

export default Grade;
