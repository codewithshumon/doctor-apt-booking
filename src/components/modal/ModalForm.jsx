import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, token } from '../../config';
import { HashLoader } from 'react-spinners';
import { getCurrentDate, getCurrentTime } from '../../utils/formatData';

const ModalForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    date: '',
    time: '',
    note: '',
  });

  const handleInpurChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log('formData', formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
    } catch (error) {
      console.log(error);

      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className=" w-[200px] sm:w-[400px] md:w-[500px] max-h-[100vh] md:max-h-[90vh]">
      <form onSubmit={handleSubmit} className="grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 ">
          <div className=" ">
            <input
              type="text"
              placeholder="Full Name *"
              name="name"
              value={formData.name}
              onChange={handleInpurChange}
              className=" w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[12px] md:text-[16px]  leading-7 text-headingColor placeholder:text-textColor"
              required
            />
          </div>

          <div className="">
            <input
              type="number"
              placeholder="Phone Number *"
              name="phone"
              value={formData.phone}
              onChange={handleInpurChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[12px] md:text-[16px] leading-7 text-headingColor placeholder:text-textColor"
              required
            />
          </div>

          <div className="">
            <input
              type="number"
              placeholder="Age *"
              name="age"
              value={formData.age}
              onChange={handleInpurChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[12px] md:text-[16px] leading-7 text-headingColor placeholder:text-textColor"
              required
            />
          </div>

          <div className="mb-1 md:mb-5 flex items-center justify-between">
            <label
              htmlFor=""
              className=" text-headingColor font-bold text-[12px] md:text-[16px] leading-7"
            >
              Gender: *
              <select
                name="gender "
                value={formData.gender}
                onChange={handleInpurChange}
                className=" text-textColor font-semibold text-[16px]
               leading-7 px-4 py-3 focus:outline-none cursor-pointer"
                required
              >
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col mt-0 sm:mt-5 md:mt-0 sm:flex-row items-center justify-around">
          <div className="">
            <p className="form_label leading-3 mb-2">
              Select Appointment Date *
            </p>
            <input
              type="date"
              name="date"
              value={formData.day}
              className="form_input leading-3 mb-2 cursor-pointer"
              onChange={handleInpurChange}
              min={getCurrentDate()}
              required
            />
          </div>
          <div>
            <p className="form_label leading-3 mb-2">
              Select Appointment Time *
            </p>
            <input
              type="time"
              name="time"
              value={formData.time}
              className="form_input cursor-pointer"
              onChange={handleInpurChange}
              min={getCurrentTime()}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="form_label text-start">About *</p>
          <textarea
            name="note"
            rows={2}
            maxLength={200}
            value={formData.note}
            placeholder="Write about your issue or what you are looking for"
            onChange={handleInpurChange}
            className="form_input"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            disabled={loading}
            type="submit"
            className="w-full px-4 py-3 bg-primaryColor text-white text-[18px]
         leading-[30px] rounded-lg"
          >
            {loading ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              'Book Appointment'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
