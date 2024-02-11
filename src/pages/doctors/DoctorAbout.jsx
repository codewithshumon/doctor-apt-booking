import { formatDate } from '../../utils/formatData';

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className=" text-irisBlueColor font-semibold text-[24px] leading-9">
            David Smith
          </span>
        </h3>
        <p className="text-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[15px] text-irisBlueColor leading-6 font-semibold">
                {formatDate('09-13-2014')} - {formatDate('10-13-2016')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>

          <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-[16px] text-irisBlueColor leading-6 font-semibold">
                {formatDate('07-04-2010')} - {formatDate('09-13-2014')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate('07-04-2010')} - {formatDate('09-13-2014')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate('07-04-2010')} - {formatDate('09-13-2014')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
