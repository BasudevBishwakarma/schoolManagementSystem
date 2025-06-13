import React, { useEffect, useState } from "react";
import { Modal, Input, DatePicker, Switch } from "antd";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import dayjs from "dayjs";

const resetValue = {
  gradeName: "",
  description: "",
  createdDate: null,
  isEnabled: false,
};

const AddGradeModal = ({ isOpen, handleCancel, onSubmit, gradeId }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: resetValue,
  });

  const [getGradeDataById, setGetGradeDataById] = useState(null);

  async function getGradeById() {
    try {
      const res = await axios.get(`http://localhost:3000/grade/${gradeId}`);
      setGetGradeDataById(res?.data);
    } catch (error) {
      console.error("Failed to fetch grade:", error);
    }
  }

  useEffect(() => {
    if (!gradeId) return;
    getGradeById();
  }, [gradeId]);

  useEffect(() => {
    if (!getGradeDataById) return;

    // Populate the form when data is fetched
    reset({
      gradeName: getGradeDataById.gradeName,
      description: getGradeDataById.description,
      createdDate: getGradeDataById.createdDate
        ? dayjs(getGradeDataById.createdDate)
        : null,
      isEnabled: getGradeDataById.isEnabled,
    });
  }, [getGradeDataById, reset]);

  const onFormSubmit = (data) => {
    const formattedData = {
      ...data,
      createdDate: data.createdDate?.format("YYYY-MM-DD"),
    };
    onSubmit(formattedData);
    handleCancel();
    reset(resetValue);
    setGetGradeDataById(null);
  };

  const handleModalCancel = () => {
    handleCancel();
    reset(resetValue);
    setGetGradeDataById(null);
  };

  return (
    <Modal
      title={gradeId ? "Edit Grade" : "Add Grade"}
      open={isOpen}
      onCancel={handleModalCancel}
      onOk={handleSubmit(onFormSubmit)}
      okText={gradeId ? "Update Grade" : "Add Grade"}
    >
      <div className="flex flex-col gap-4">
        <div>
          <label>Grade Name</label>
          <Controller
            name="gradeName"
            control={control}
            rules={{ required: "Please enter grade name" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter grade name" />
            )}
          />
          {errors.gradeName && (
            <p style={{ color: "red" }}>{errors.gradeName.message}</p>
          )}
        </div>

        <div>
          <label>Description</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Enter description"
                rows={3}
              />
            )}
          />
        </div>

        <div>
          <label>Created Date</label>
          <Controller
            name="createdDate"
            control={control}
            rules={{ required: "Please select created date" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                value={field.value}
                onChange={(date) => field.onChange(date)}
                style={{ width: "100%" }}
              />
            )}
          />
          {errors.createdDate && (
            <p style={{ color: "red" }}>
              {String(errors?.createdDate.message)}
            </p>
          )}
        </div>

        <div>
          <label>Enabled</label>
          <Controller
            name="isEnabled"
            control={control}
            render={({ field }) => (
              <Switch checked={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddGradeModal;
