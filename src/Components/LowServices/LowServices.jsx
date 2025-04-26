import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const LowServices = () => {
  const [services, setServices] = useState([]);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="my-24 text-[#0f0f0f]" ref={sectionRef}>
      <h1 className="w-fit mx-auto text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
        We Provide Best Law Services
      </h1>
      <p className="w-fit md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto text-sm md:text-base lg:text-lg font-medium opacity-70 text-center mb-6">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center sm:items-start bg-gray-100 border border-gray-200 p-10 rounded-xl"
          >
            <img className="w-14" src={item.icon} alt="" />
            <h2 className="text-5xl font-extrabold mt-4">
              {inView && <CountUp end={item.value} duration={5} />}+
            </h2>
            <p className="text-gray-500 mt-4">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowServices;
