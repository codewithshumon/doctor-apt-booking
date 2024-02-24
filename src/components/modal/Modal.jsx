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
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full flex top-[5%] pb-[500px] sm:pb-0 justify-center overflow-scroll">
          <div
            className={`translate duration-300 h-[200px] ${
              showModal ? 'translate-y-0' : 'translate-y-full'
            } ${showModal ? 'opacity-100' : 'opacity-0'}`}
          >
            <button
              onClick={handleClose}
              className="p-0 md:p-1 border-0 hover:opacity-70 bg-gray-300 rounded-full transition absolute top-[5%] md:top-[10%] right-[5%]"
            >
              <IoMdClose size={18} color="red" />
            </button>
            <div className="bg-white p-8 rounded-3xl w-full text-center font-bold text-[20px] md:text-[30px]">
              <h1>{title}</h1>
              <ModalForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
