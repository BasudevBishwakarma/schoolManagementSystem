import React from "react";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ open, onCancel, title }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens/localStorage or do any logout cleanup here
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Close modal and navigate to login page
    onCancel();
    navigate("/login");
  };

  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="logout" type="primary" danger onClick={handleLogout}>
          Logout
        </Button>,
      ]}
      centered
    >
      <p>Are you sure you want to logout?</p>
    </Modal>
  );
};

export default LogoutModal;
