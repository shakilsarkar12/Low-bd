import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { MessageSquare } from "lucide-react";

const LawyerProfDetl = ({ lawyer }) => {
  const {
    name,
    specialty,
    licenseNo,
    fee,
    rating,
    reviews,
    email,
    phone,
    address,
    totalCasesHandled,
    successRate,
    verified,
    desc,
  } = lawyer;

  return (
    <div className="bg-gray-100 border border-gray-200 p-4 lg:p-8 rounded-lg mt-6">
      <h1 className="w-fit mx-auto text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center">
        Lawyer’s Profile Details
      </h1>
      <p className="text-center text-sm sm:text-base md:w-9/12 mx-auto">{desc}</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col sm:flex-row md:flex-col sm:justify-between md:justify-normal">
          <div className="">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-lg font-semibold text-gray-600">{specialty}</p>
              <p className="font-semibold opacity-70">
                <strong className="font-bold">License No</strong>: {licenseNo}
              </p>
            </div>
            <div className="my-8">
              <h3 className="font-semibold text-xl mb-1">Contact Info</h3>
              <p className="text-lg font-semibold opacity-80">
                <strong className="text-base">Email</strong>: {email}
              </p>
              <p className="text-lg font-semibold opacity-80">
                <strong className="text-base">Phone</strong>: {phone}
              </p>
              <p className="text-lg font-semibold opacity-80">
                <strong className="text-base">Address</strong>: {address}
              </p>
            </div>
          </div>
          <div>
            <div className=" gap-4">
              <h3 className="font-semibold text-xl">Consultation Fee</h3>
              <p className="text-green-700 font-bold">৳{fee}</p>
            </div>
            <div className="my-8">
              <h3 className="font-semibold text-xl">Success Rate</h3>
              <p className="text-lg font-semibold opacity-80">{successRate}%</p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-xl">Total Cases Handled</h3>
              <p className="text-lg font-semibold opacity-80">
                {totalCasesHandled}
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              <div className="bg-[#176AE510] text-[#176AE5] border-[#176AE520] font-medium px-4 py-2 rounded-4xl">
                {verified ? (
                  <span className="flex items-center gap-2 ">
                    <MdVerified />
                    Verified
                  </span>
                ) : (
                  "Not Verified"
                )}
              </div>
              <span className="bg-[#FFA00010] text-[#FFA000] text-sm font-medium border border-[#FFA00020] rounded-full pt-2 px-3">
                Top Lawyer
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Client Reviews</h3>
            <ul className="flex items-center gap-1 text-2xl">
              <li>
                <IoIosStar color="#FFCA28" />
              </li>
              <li>
                <IoIosStar color="#FFCA28" />
              </li>
              <li>
                <IoIosStar color="#FFCA28" />
              </li>
              <li>
                <IoIosStar color="#FFCA28" />
              </li>
              <li>
                <IoIosStarHalf color="#FFCA28" />
              </li>
              <li>{rating}</li>
            </ul>
          </div>
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 mb-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 shadow-inner">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {review.name}
                  </h3>
                  <div className="flex text-yellow-400 mt-1">
                    <span>
                      <IoIosStar color="#FFCA28" />
                    </span>
                    <span>
                      <IoIosStar color="#FFCA28" />
                    </span>
                    <span>
                      <IoIosStar color="#FFCA28" />
                    </span>
                    <span>
                      <IoIosStar color="#FFCA28" />
                    </span>
                    <span>
                      <IoIosStar color="#FFCA28" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed relative pl-4 border-l-4 border-blue-200">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerProfDetl;
