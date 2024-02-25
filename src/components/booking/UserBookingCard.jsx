/* eslint-disable react/prop-types */

import { HashLoader } from 'react-spinners';
import { formatDate, formatTime } from '../../utils/formatData';
import { BASE_URL, token } from '../../config';
import { useState } from 'react';
import { toast } from 'react-toastify';

const UserBookingCard = ({ booking }) => {
  const [loading, setLoading] = useState(false);
  const { date, user, doctor, time, _id: id } = booking;

  const userId = user._id;
  const doctorId = doctor._id;

  console.log(booking);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('token', token);
    try {
      const res = await fetch(
        `${BASE_URL}/booking/${id}/${userId}/${doctorId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('res', res);

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  console.log(booking);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex-col xs:flex-row flex items-center justify-between gap-4 xs:gap-0">
        <div className="h-full flex flex-col">
          <img
            src={doctor.photo}
            alt="user photo"
            className="h-[200px] xs:h-[130px] sm:h-[150px] md:h-[200px]"
          />
        </div>
        <div className="flex h-full x flex-col justify-between md:justify-around">
          <div>
            <h1 className="text-[22px] leading-9 font-bold text-headingColor">
              {doctor.name}
            </h1>
            <h2 className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-lg text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
              {doctor.specialization.charAt(0).toUpperCase() +
                doctor.specialization.slice(1)}
            </h2>
          </div>
          <div className=" text-headingColor  text-[14px] leading-5 lg:text-[16] lg:leading-6 font-semibold">
            <p>Price: ${doctor.ticketPrice}</p>
            <p>Date: {formatDate(date)}</p>
            <p>Time: {formatTime(time)}</p>
          </div>
        </div>
        <div className="h-full flex items-center">
          <button className="btn mt-0" onClick={handleSubmit}>
            {loading ? <HashLoader size={35} color="#ffffff" /> : 'DELETE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserBookingCard;
