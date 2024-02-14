/* eslint-disable react/prop-types */
import { formatDate } from '../../utils/formatData';

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className=" text-irisBlueColor font-semibold text-[24px] leading-9">
            Dr. {name}
          </span>
        </h3>
        <p className="text-para">{about || 'Write about you'}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20] leading-[30px] text-headingColor font-semibold">
          {experiences?.length === 0 ? 'Set Education' : 'Education'}
        </h3>

        <ul className="pt-4 md:p-5">
          {qualifications?.length !== 0 &&
            qualifications?.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
              >
                <div>
                  <span className="text-[15px] text-irisBlueColor leading-6 font-semibold">
                    {formatDate(item.startingDate)} -
                    {formatDate(item.endingDate)}
                  </span>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                    {item.degree}
                  </p>
                </div>
                <p className="text-[14px] leading-6 font-medium text-textColor">
                  {item.university}
                </p>
              </li>
            ))}

          {qualifications?.length === 0 && (
            <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
              <div>
                <span className="text-[16px] text-irisBlueColor leading-6 font-semibold">
                  {'Duration: DD-MM-YYYY - DD-MM-YYYY'}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  Your Degree Titile
                </p>
              </div>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                Your University Name, Location
              </p>
            </li>
          )}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20] leading-[30px] text-headingColor font-semibold">
          {experiences?.length === 0 ? 'Set Experience' : 'Experience'}
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.length !== 0 &&
            experiences?.map((item, index) => (
              <li key={index} className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate)} -{' '}
                  {formatDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {item.position}
                </p>
                <p className="text-[14px] leading-6 font-medium text-textColor">
                  {item.hospital}
                </p>
              </li>
            ))}

          {experiences?.length === 0 && (
            <li className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {'Duration: DD-MM-YYYY - DD-MM-YYYY'}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Designation
              </p>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                Organization Name
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
