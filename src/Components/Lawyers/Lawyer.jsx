import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const { id, name, image, specialty, experience, licenseNo, availability } =
    lawyer;
  
    const [available, setAvailable] = useState(false);
    
    useEffect(() => {
      const today = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const todayName = days[today.getDay()];
      setAvailable(availability.includes(todayName));
    }, [availability]);
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-5 xl:gap-10 border border-gray-200 p-3 md:p-4 lg:p-6 rounded-lg">
      <div className="w-fit mx-auto sm:w-4/12 h-[260px]  border rounded-lg overflow-hidden border-gray-200">
        <img className="sm:w-[260px] h-full sm:h-[260px]" src={image} alt="" />
      </div>
      <div className="w-full sm:w-9/12">
        <div className="flex lg:flex-col xl:flex-row gap-4 my-4">
          <span className="w-fit bg-[#0EA10610] text-[#0EA106] font-medium px-4 py-2 rounded-4xl sm:mr-2">
            {available ? "Available" : "Unavailable"}
          </span>
          <span className="w-fit bg-[#176AE510] text-[#176AE5] font-medium px-4 py-2 rounded-4xl">
            {experience}+ Years Experience
          </span>
        </div>
        <h1 className="xs text-lg sm:text-2xl md:text-3xl font-bold mt-2 sm:mt-6">
          {name}
        </h1>
        <h3 className="text-lg font-semibold opacity-60 mt-2 sm:mt-6">
          {specialty}
        </h3>
        <p className="font-semibold opacity-70 mt-2 sm:mt-6">
          License No: {licenseNo}
        </p>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/lawers-details/${id}`}
        >
          <button className="border border-[#176ae520] text-[#176ae5] mt-6 w-full py-2 rounded-full text-lg font-semibold duration-200 cursor-pointer hover:bg-[#176ae5] hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lawyer;
