import React from 'react';

const BookedLawyer = ({ lawyer, handleCancelAppointment }) => {
  const { id, name, fee, specialty } = lawyer;

  return (
    <>
      <div className="border border-gray-200 p-4 sm:p-6 rounded-lg mb-4 sm:mb-5 md:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-4">{name}</h1>
            <h2 className="md:text-lg font-semibold text-[#14141460]">
              {specialty}
            </h2>
          </div>
          <span className="md:text-lg font-semibold opacity-60 mt-4 sm:mt-0">
            Appointment Fee : {fee} Taka
          </span>
        </div>
        <div className="border-b-2 border-dashed border-gray-100 my-4"></div>
        <div>
          <button
            onClick={() => handleCancelAppointment(id)}
            className="btn bg-white hover:bg-[#FF000080] w-full border-[#FF0000]  text-[#FF0000] hover:text-white rounded-full text-xl font-semibold"
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default BookedLawyer;