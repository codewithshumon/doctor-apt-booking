/* eslint-disable react/no-unescaped-entities */
import { HiStar } from "react-icons/hi";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import boy1 from "./../../assets/images/review/boy1.jpg";
import boy2 from "./../../assets/images/review/boy2.jpg";
import boy3 from "./../../assets/images/review/boy3.jpg";
import boy4 from "./../../assets/images/review/boy4.png";
import boy5 from "./../../assets/images/review/boy5.jpg";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={boy1}
                alt="patientAvatar"
                width={100}
                height={100}
                className="rounded-full object-cover aspect-square w-[100px] h-[100px]"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ryan Cooper
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={boy2}
                alt="patientAvatar"
                width={100}
                height={100}
                className="rounded-full object-cover aspect-square w-[100px] h-[100px]"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Jason Brooks
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={boy3}
                alt="patientAvatar"
                width={100}
                height={100}
                className="rounded-full object-cover aspect-square w-[100px] h-[100px]"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Daniel Hayes
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={boy4}
                alt="patientAvatar"
                width={100}
                height={100}
                className="rounded-full object-cover aspect-square w-[100px] h-[100px]"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Kevin Scott
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={boy5}
                alt="patientAvatar"
                width={100}
                height={100}
                className="rounded-full object-cover aspect-square w-[100px] h-[100px]"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Jacob Michael
                </h4>

                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I have taken medical services from them. They treat so well and
              they are providing the best medical services."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
