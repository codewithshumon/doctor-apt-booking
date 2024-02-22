/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import { formatTime } from '../../utils/formatData';
import Modal from '../../components/modal/Modal';

const SidePanel = ({ doctorId, timeSlots, ticketPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointment = () => {
    console.log('handleBookAppointment');
    setIsModalOpen(true);
  };

  return (
    <div className="p-3 lg:p-5 shadow-panelShadow rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} USD
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text-para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          {timeSlots &&
            timeSlots.length !== 0 &&
            timeSlots.map((timeSlot, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[16px] leading-6 text-textColor font-semibold">
                  {timeSlot.day.charAt(0).toUpperCase() + timeSlot.day.slice(1)}
                </p>
                <p className="text-[16px] leading-6 text-textColor font-semibold">
                  {formatTime(timeSlot.startingTime)} -{' '}
                  {formatTime(timeSlot.endingTime)}
                </p>
              </li>
            ))}

          {timeSlots && timeSlots.length === 0 && (
            <li className="flex items-center justify-between mb-2">
              <p className="text-[16px] leading-6 text-textColor font-semibold">
                Day
              </p>
              <p className="text-[16px] leading-6 text-textColor font-semibold">
                Time AM - Time PM
              </p>
            </li>
          )}
        </ul>
      </div>

      <button className="btn" onClick={handleBookAppointment}>
        Book Appointment
      </button>

      {isModalOpen && (
        <Modal
          title="Book Appointment"
          setIsModalOpen={setIsModalOpen}
          isOpen={isModalOpen ? true : false}
        ></Modal>
      )}
    </div>
  );
};

export default SidePanel;
