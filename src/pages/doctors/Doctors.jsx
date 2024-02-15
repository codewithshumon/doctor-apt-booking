import { useEffect, useState } from 'react';

import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Error from '../../components/error/Error';
import Loading from '../../components/loader/Loading';

import DoctorCard from '../../components/doctors/DoctorCard';
import Testimonial from '../../components/testimonials/Testimonial';

const Doctors = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');

  const handleSearch = () => {
    setQuery(query.trim());
  };

  //this is to reduce re-rendering on query typing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctor?query=${debounceQuery}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              placeholder="Search Doctor by Name or Specialization"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="btn mt-0 rounded-[0px] rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="">
        {loading && <Loading />}
        {error && <Error />}
        {!loading && !error && (
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor, index) => (
                <DoctorCard key={index} doctor={doctor} index={index} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patient say</h2>
          <p className="text-para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>

        <Testimonial />
      </section>
    </>
  );
};

export default Doctors;
