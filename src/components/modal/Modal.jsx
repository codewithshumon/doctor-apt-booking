/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import ModalForm from './ModalForm';

const Modal = ({ title, isOpen, setIsModalOpen }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (!showModal) return;

    // Add class to body to disable scrolling
    document.body.style.overflow = 'hidden';

    // Remove class and enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-30">
      <div
        className={`translate duration-300 h-[200px] ${
          showModal ? 'translate-y-0' : 'translate-y-full'
        } ${showModal ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="bg-white p-8 rounded-3xl">
          <h1>{title}</h1>
          <ModalForm />
        </div>
        <button
          onClick={handleClose}
          className="p-1 border-0 hover:opacity-70 transition absolute left-9"
        >
          <IoMdClose size={18} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
