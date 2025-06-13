import React from "react";
import { Modal } from "antd";

const DeleteConfirmModal = ({ isOpen, onCancel, onConfirm, itemName }) => {
  return (
    <Modal
      title="Confirm Deletion"
      open={isOpen}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Delete"
      okType="danger"
      cancelText="Cancel"
      centered
    >
      <p>
        Are you sure you want to delete{" "}
        <strong>{itemName || "this item"}</strong>?
      </p>
    </Modal>
  );
};

export default DeleteConfirmModal;
