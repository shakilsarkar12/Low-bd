import React from "react";
import heroimg from '../../assets/banner-img-1.png'

const Hero = () => {
  return (
    <div
      className="hero h-[45vh] md:h[60vh] lg:h-[70vh] xl:h-[80vh] rounded-3xl overflow-hidden bg-gradient-to-b to-[#0F0F0F] from-[#ffffff] px-4"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 sm:text-xl md:text-3xl lg:text-4xl font-extrabold lg:w-11/12 xl:w-10/12 mx-auto lg:leading-16">
            It avoids subjective claims or exaggeration that m ight raise red
            flags legally
          </h1>
          <p className="mb-5 lg:w-9/12 mx-auto ">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
