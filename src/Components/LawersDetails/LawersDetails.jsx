import React, { useEffect, useState } from "react";
import { TiInfoOutline } from "react-icons/ti";
import { Link, Navigate, useLoaderData, useParams } from "react-router";
import { addToLStorage } from "../../utility/AddLocalStorage";
import { toast } from "react-toastify";
import LawyerProfDetl from "../LawyerProfDetl/LawyerProfDetl";

const LawersDetails = () => {
  const { id } = useParams();
  const lawers = useLoaderData();

  const lawyer = lawers.find((lawyer) => lawyer.id.toString() === id);

  const { name, image, specialty, experience, licenseNo, availability, fee } =
    lawyer;
  // useEffect(() => {

  // }, [lawyer, id]);

  const [available, setAvailable] = useState(false);
  const [lawyerName, setLaeyerName] = useState();

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


    if (lawyer) {
      setLaeyerName(lawyer.name)
      document.title = `${lawyerName} | Low-BD`;
    } else {
      document.title = "Lawyer Details | Low-BD";
    }
  }, [availability, lawyer, lawyerName]);

  const handleBookBtn = () => {
    if (available) {
      addToLStorage(lawyer.id, name);
    } else {
      toast.warn(`${name} is not available today`);
    }
  };

  if (!lawyer) {
    return <Navigate to={`/lawer-details/${id}`} replace />;
  }
  return (
    <div>
      <LawyerProfDetl lawyer={lawyer}></LawyerProfDetl>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-5 xl:gap-10 border border-gray-200 p-3 md:p-4 lg:p-6 rounded-lg my-4">
        <div className="w-fit mx-auto sm:mx-0 border rounded-lg overflow-hidden border-gray-200">
          <img className="w-[260px] h-[260px]" src={image} alt={name} />
        </div>
        <div className="w-full sm:w-9/12">
          <div className="my-4">
            <span className="bg-[#176AE510] text-[#176AE5] font-medium px-4 py-2 rounded-4xl">
              {experience}+ Years Experience
            </span>
          </div>
          <h1 className="text-3xl font-bold mt-6">{name}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 md:gap-8 lg:gap-20">
            <h3 className="font-semibold opacity-60 mt-6 flex-1/2 sm:flex-none">
              {specialty}
            </h3>
            <p className="font-semibold opacity-70 mt-6 flex sm:flex-col lg:flex-row">
              License No: <span>{licenseNo}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 my-6">
            <h3 className="text-lg font-bold opacity-70">Availability</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {availability.map((day, index) => (
                <span
                  key={index}
                  className="bg-[#FFA00010] text-[#FFA000] text-sm font-medium px-3 py-1 border border-[#FFA00020] rounded-full"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <h2 className="font-bold text-[#14141480]">
            Consultation Fee:
            <span className="text-[#0EA106]"> Taka: {fee}</span>
          </h2>
        </div>
      </div>

      <div className="border border-gray-200 p-4 lg:p-8 rounded-lg mb-24">
        <h1 className="w-fit mx-auto text-2xl font-bold mb-6">
          Book an Appointment
        </h1>
        <div className="border-b-2 border-dashed border-gray-200"></div>
        <div className="flex items-center justify-between py-4">
          <h2 className="text-lg font-bold text-[#141414]">Availability</h2>
          <span className="bg-[#09982F20] text-[#09982F] text-sm font-medium px-3 py-1 border border-[#09982F30] rounded-full">
            Lawyer {available ? "Available" : " is unavailable"} Today
          </span>
        </div>
        <div className="border-b border-gray-200"></div>
        <div className="py-4">
          <h1 className="w-fit flex  md:items-center gap-2 bg-[#FFA00010] text-[#FFA000] font-medium px-4 py-1 border border-[#FFA00020] rounded-sm md:rounded-xl lg:rounded-2xl xl:rounded-full">
            <TiInfoOutline className="hidden md:block text-5xl lg:text-2xl xl:text-lg" />
            Due to high volume of clients, we are currently accepting
            appointments for today only. We appreciate your understanding and
            cooperation.
          </h1>
        </div>
        <div className="md:p-6">
          <Link to={available && "/mybooking"}>
            <button
              onClick={handleBookBtn}
              className="btn w-full border-[#0EA106] bg-[#0EA106] hover:bg-white text-white hover:text-[#0EA106] rounded-4xl text-lg md:text-xl font-semibold py-6"
            >
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawersDetails;
