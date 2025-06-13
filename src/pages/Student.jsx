import React, { useEffect, useMemo, useState } from "react";
import TableSearch from "../components/Table/TableSearch";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AppTable from "../components/Table";
import { useStudentColumns } from "./columns/useStudenColumn";
import axios from "axios";
import AddStudentModal from "./models/AddStudentModal";

const Student = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [studentId, setStudentId] = useState();

  const columns = useStudentColumns({ onDelete, onEdit });

  const filteredStudents = useMemo(() => {
    if (!searchKeyword) return studentsData;
    return studentsData.filter((item) => {
      const name = `${item?.firstName} ${item?.lastName}`;
      return name.toLowerCase().includes(searchKeyword.toLowerCase());
    });
  }, [searchKeyword, studentsData]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      setStudentsData(res.data);
      handleCancel();
    } catch (error) {
      console.error("Error fetching grade data:", error);
    }
  };

  function onEdit(data) {
    setStudentId(data?.id);
    setModalOpen(true);
  }
  function onDelete() {}

  const handleAddStudent = (data) => {
    console.log("Submitted student data:", data);
  };

  function handleCancel() {
    setModalOpen(false);
    setStudentId(null);
  }

  useEffect(() => {
    fetchStudents();
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
            onClick={() => setModalOpen(true)}
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
      <AddStudentModal
        open={isModalOpen}
        onCancel={() => setModalOpen(false)}
        onSubmit={handleAddStudent}
        studentId={studentId}
      />
    </div>
  );
};

export default Student;
