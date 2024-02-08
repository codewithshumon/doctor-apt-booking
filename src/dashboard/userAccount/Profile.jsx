/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { BASE_URL, token } from '../../config';
import uploadImageToCloudinary from '../../utils/imageUpload';

const Profile = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    bloodType: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        password: '',
        photo: user.photo,
        gender: user.gender,
        bloodType: user.bloodType,
      });
    }
  }, [user]);

  const handleInpurChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/user/${user._id}`, {
        method: 'PUT',
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
    <div className="mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInpurChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleInpurChange}
            aria-readonly
            readOnly
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInpurChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInpurChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label
            htmlFor=""
            className=" text-headingColor font-bold text-[16px] leading-7"
          >
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInpurChange}
              className=" text-textColor font-semibold text-[16px]
                     leading-7 px-4 py-3 focus:outline-none cursor-pointer"
            >
              <option value="">select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-purpleColor flex items-center justify-center">
              <img
                src={formData.photo}
                alt="avatar"
                className="w-full rounded-full"
              />
            </figure>
          )}

          <div className=" relative w-[160px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg, .png, .jpeg"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileInputChange}
            />
            <label
              htmlFor="customFile"
              className=" absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.357rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name : 'Upload Photo'}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading}
            type="submit"
            className="w-full px-4 py-3 bg-primaryColor text-white text-[18px]
               leading-[30px] rounded-lg"
          >
            {loading ? (
              <HashLoader size={35} color="#ffffff" />
            ) : (
              'Update Profile'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
