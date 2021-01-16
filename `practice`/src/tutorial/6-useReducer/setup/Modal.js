import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
