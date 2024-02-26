import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet-async';

import notFoundAnimation from './../../public/not-fond-page.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Medicare - Page Not Found</title>
        <meta name="description" content="This is the not found page." />
      </Helmet>
      <section>
        <div className=" w-full h-full">
          <Lottie options={defaultOptions} />
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
