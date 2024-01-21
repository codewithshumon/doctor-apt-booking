import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInpurChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3
          className="text-[22px] text-headingColor leading-9 font-bold md-10
        "
        >
          Hello!
          <span className="text-primaryColor"> Welcome Back</span>
          💥
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleInpurChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInpurChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full px-4 py-3 bg-primaryColor text-white text-[18px]
               leading-[30px] rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="mt-5 text-textColor text-center">
            Don&apos;t have an accout?{' '}
            <Link
              to="/register"
              className="text-primaryColor font-semibold ml-1"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
