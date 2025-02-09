import React from "react";

interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button style={{ backgroundColor: "black" }} onClick={onConfirm}>Yes</button>
        <button style={{ backgroundColor: "black" }} onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default Modal;