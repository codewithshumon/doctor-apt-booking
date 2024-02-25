import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';

import Error from '../../components/error/Error';
import Loading from '../../components/loader/Loading';
import UserBookingCard from '../../components/booking/UserBookingCard';

const MyBookings = () => {
  const {
    data: bookings,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/booking`);

  return (
    <section>
      <div>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-4">
            {bookings.map((booking) => (
              <UserBookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        )}

        {!loading && !error && bookings.length === 0 && (
          <h2 className="mx-5 text-center text-headingColor leading-7 text-[20px] font-semibold ">
            You did not book any doctor appointment yet!
          </h2>
        )}
      </div>
    </section>
  );
};

export default MyBookings;
