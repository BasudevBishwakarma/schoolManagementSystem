import React from "react";
import { Modal, Form, Input, Select, DatePicker, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import { Switch } from "antd";

const { Option } = Select;

const AddStudentModal = ({ open, onCancel, onSubmit, studentId }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      dob: null,
      isEnabled: false,
    },
  });

  return (
    <Modal
      title={studentId ? "Edit Student" : "Add Student"}
      open={open}
      onCancel={onCancel}
      onOk={handleSubmit(onSubmit)}
      okText={studentId ? "Update Student" : "Add Student"}
      destroyOnClose
    >
      <div className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label>Student Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Please enter student name" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter student name" />
            )}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Please enter email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter email" />
            )}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="space-x-[12px]">
          <label>Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Please select gender" }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select gender"
                onChange={(value) => field.onChange(value)}
                style={{ width: "100px" }}
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            )}
          />
          {errors.gender && (
            <p style={{ color: "red" }}>{errors.gender.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label>Date of Birth</label>
          <Controller
            name="dob"
            control={control}
            rules={{ required: "Please select date of birth" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
                onChange={(date) => field.onChange(date)}
                value={field.value ? dayjs(field.value) : null}
              />
            )}
          />
          {errors.dob && (
            <p style={{ color: "red" }}>{String(errors.dob.message)}</p>
          )}
        </div>

        {/* Status Switch */}
        <div>
          <label>Active</label>
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

export default AddStudentModal;
