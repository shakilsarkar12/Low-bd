import React, { useEffect, useState } from "react";
import Lawyer from "../Lawyers/Lawyer";

const BestLawers = ({ lawers }) => {
    const [displayLawers, setDisplayLawers] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if (showAll) {
            setDisplayLawers(lawers)
        } else {
            setDisplayLawers(lawers.slice(0, 6));
        }
    }, [lawers, showAll])
    
    const handleShowAll = () => {
        if (showAll) {
            window.scrollTo(0,800)
        }
        setShowAll(!showAll)
    }
  return (
    <div className="my-24 text-[#0f0f0f]">
      <h1 className="w-fit mx-auto text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-center">
        Our Best Lawyers
      </h1>
      <p className="w-fit md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto text-sm md:text-base lg:text-lg font-medium opacity-70 text-center mb-6">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 2xl:gap-16">
        {displayLawers.map((lawyer) => (
          <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <button
          onClick={handleShowAll}
          className="btn border-none bg-[#0EA106] text-white rounded-full text-lg px-6"
        >
          {showAll? "Show Less" : "Show All Lawyer" }
        </button>
      </div>
    </div>
  );
};

export default BestLawers;
