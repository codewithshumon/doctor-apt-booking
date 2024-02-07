import { useContext, useState } from 'react';
import userImg from './../../assets/images/doctor-img01.png';
import { AuthContext } from '../../context/AuthContext';
import MyBookings from './MyBookings';
import Profile from './Profile';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';

const MyAccount = () => {
  const { dispatch } = useContext(AuthContext);
  const [tab, setTab] = useState('bookings');

  const {
    data: userData,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/user/profile/me`);

  console.log(userData);
  console.log(loading);
  console.log(error);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loading />}

        {loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userImg}
                    alt="user-img"
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <div className="text-[18px] leading-[30px] text-headingColor font-bold">
                  David Stoke
                </div>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  example@gmail.com
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:{' '}
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    o-
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px] text-white font-semibold">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] rounded-full "
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] rounded-full">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab('bookings')}
                  className={`${
                    tab === 'bookings' && 'bg-primaryColor text-white'
                  } p-2 mr-5 px-5 rounded-full text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab('settings')}
                  className={`${
                    tab === 'settings' && 'bg-primaryColor text-white'
                  } p-2 mr-5 px-5 rounded-full text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === 'bookings' && <MyBookings />}
              {tab === 'settings' && <Profile />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
