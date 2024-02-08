/* eslint-disable no-unused-vars */
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL, token } from '../../config';

import Error from '../../components/error/Error';
import Loading from '../../components/loader/Loading';
import Tabs from './Tabs';
import { useState } from 'react';

const Dashboard = () => {
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctor/profile/me`
  );

  const [tab, setTab] = useState('overview');

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
