import { Helmet } from 'react-helmet-async';
import { services } from '../assets/data/services';
import ServiceCard from '../components/services/ServiceCard';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Medicare - Services</title>
        <meta name="description" content="This is the services page." />
      </Helmet>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] ">
            {services.map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
