const SidePanel = () => {
  return (
    <div className="p-3 lg:p-5 shadow-panelShadow rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          5 USD
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text-para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[16px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[16px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[16px] leading-6 text-textColor font-semibold">
              Tuesday
            </p>
            <p className="text-[16px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[16px] leading-6 text-textColor font-semibold">
              Friday
            </p>
            <p className="text-[16px] leading-6 text-textColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>

      <button className="btn">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
