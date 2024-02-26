/* eslint-disable react/prop-types */

import { useState } from 'react';
import { toast } from 'react-toastify';

import { formatDate, formatTime } from '../../utils/formatData';
import { HashLoader } from 'react-spinners';
import { BASE_URL, token } from '../../config';

const DoctorBookingCard = ({ booking }) => {
  const [loading, setLoading] = useState(false);
  const {
    _id: id,
    createdAt,
    user,
    doctor,
    date,
    gender,
    name,
    note,
    phone,
    time,
  } = booking;

  const userId = user._id;
  const doctorId = doctor._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

  return (
    <div className="w-full h-full">
      <div className=" w-full h-full flex flex-col gap-5 border-2 border-slate-400 rounded-xl p-5">
        <div className="w-full h-full flex-col xs:flex-row flex items-center justify-between gap-4 xs:gap-0">
          <div className="h-full flex flex-col ">
            <img
              src={user.photo}
              alt="user photo"
              className="h-[200px] xs:h-[130px] sm:h-[150px] md:h-[200px] rounded-full"
            />
          </div>
          <div className="flex h-full x flex-col justify-between md:justify-around">
            <div>
              <h1 className="text-[22px] leading-9 font-bold text-headingColor">
                {name}
              </h1>
              <p>Phone: {phone}</p>
              <p>Created: {formatDate(createdAt)}</p>
            </div>
            <div className=" text-headingColor text-[14px] leading-5 lg:text-[16] lg:leading-6 font-semibold">
              <p>Gender: {gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
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

        <div className="w-full">
          <p>
            <span className=" font-bold">Patient Note:</span> {note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorBookingCard;
