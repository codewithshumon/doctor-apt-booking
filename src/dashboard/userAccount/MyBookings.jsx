import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';

import Error from '../../components/error/Error';
import Loading from '../../components/loader/Loading';
import DoctorCard from '../../components/doctors/DoctorCard';

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/user/appointments/my-appointments`);

  return (
    <section>
      <div>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {appointments.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}

        {!loading && !error && appointments.length === 0 && (
          <h2 className="mx-5 text-center text-headingColor leading-7 text-[20px] font-semibold ">
            You did not book any doctor appointment yet!
          </h2>
        )}
      </div>
    </section>
  );
};

export default MyBookings;
