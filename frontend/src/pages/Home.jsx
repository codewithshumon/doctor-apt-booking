import heroImage01 from './../assets/images/hero-img01.png';
import heroImage02 from './../assets/images/hero-img02.png';
import heroImage03 from './../assets/images/hero-img03.png';

const Home = () => {
  return (
    <>
      {/* ----hero section---- */}

      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ----hero content---- */}

              <div>
                <div className=" lg:w-[570px]">
                  <h1 className=" text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life
                  </h1>
                  <p className="text-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Provident delectus ex autem officia nobis architecto.
                    Perspiciatis mollitia non quis quo veniam veritatis aliquid
                    consequatur fugiat atque temporibus.
                  </p>

                  <button className="btn">Request an Appointment</button>
                </div>

                {/* ----hero content---- */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[54px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]" />
                    <p className="text-para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[54px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]" />
                    <p className="text-para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[54px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]" />
                    <p className="text-para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/* ----hero images---- */}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img
                    src={heroImage01}
                    alt="heroImageOne"
                    className=" w-full"
                  />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImage02} alt="" className=" w-full mb-[30px]" />
                  <img src={heroImage03} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
