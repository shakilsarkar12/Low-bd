import React, { useEffect } from "react";
import { Link, useParams } from "react-router";

const LawyerDetailsError = () => {
    const { id } = useParams();
      useEffect(() => {
          document.title = ` "${id}" This is Not a lawyer ID | Low-BD`;
      }, [id]);
  return (
    <>
      <div className="min-h-[calc(100vh-128px)] flex-col items-center flex justify-center">
        <h1 className="w-fit mx-auto text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-center text-red-400">
          Lawyer Not Found
        </h1>
        <div className="fw-fit md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto text-sm md:text-base lg:text-lg font-medium opacity-70 text-center mb-6">
          <p className="opacity-65 mb-4">No Lawyer Found with this ID NO-</p>
          <span className="text-xl">{id}</span>
        </div>
        <Link to="/">
          <button className="btn md:btn-lg border-none bg-[#0EA106] text-white">
            Go To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default LawyerDetailsError;
