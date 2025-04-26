import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredLawyers } from "../../utility/AddLocalStorage";
import BookedLawyer from "../../Components/Bookedlawyer/BookedLawyer";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";
import { toast } from "react-toastify";

const MyBooking = () => {
  const data = useLoaderData();
  const [bookingLawyers, setBookingLawyers] = useState([]);

  useEffect(() => {
    const storedLawyersData = getStoredLawyers();
    const myBooking = data.filter((lawyer) =>
      storedLawyersData.includes(lawyer.id)
    );
    setBookingLawyers(myBooking);
  }, [data]);

  const removefromStorage = (id) => {
    const storedLawyers = getStoredLawyers();
    const reminingLawyers = storedLawyers.filter((lawyer) => lawyer !== id);
    localStorage.setItem("lawers", JSON.stringify(reminingLawyers));

    const newData = bookingLawyers.filter((lawyer) => lawyer.id !== id);
    setBookingLawyers(newData);
    toast.error(`Appointment Canceled`);
  };

  const handleCancelAppointment = (id) => {
    removefromStorage(id);
  };

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const chartData = bookingLawyers.map((lawyer) => ({
    name: lawyer.name,
    fee: lawyer.fee,
  }));

  const colors = [
    "#0088FE",
    "#FFBB28",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ];
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>>
      {bookingLawyers.length !== 0 ? (
        <div>
          <div className="my-10 border border-gray-200 p-4 md:p-6 lg:p-8 pb-5 rounded-2xl mb-24">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis
                  ticks={[
                    0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000,
                    2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000,
                  ]}
                  tick={{ fontSize: 14, fill: "#555" }}
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar
                  dataKey="fee"
                  shape={<TriangleBar />}
                  label={{ position: "top", fill: "#333" }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-16 mb-24">
            <h1 className="w-fit mx-auto text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
              My Today Appointments
            </h1>
            <p className="w-fit md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto text-sm md:text-base lg:text-lg font-medium opacity-70 text-center mb-6">
              Here are your scheduled appointments for today. Our platform
              connects you with verified and experienced lawyers from a wide
              range of legal specialties — all tailored to your convenience.
            </p>
            {bookingLawyers.map((lawyer) => (
              <BookedLawyer
                key={lawyer.id}
                lawyer={lawyer}
                handleCancelAppointment={handleCancelAppointment}
              ></BookedLawyer>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-128px)] flex-col items-center flex justify-center">
          <h1 className="w-fit mx-auto text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-center">
            You Have Not Booked any appointment yet
          </h1>
          <p className="w-fit md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto text-sm md:text-base lg:text-lg font-medium opacity-70 text-center mb-6">
            Once you book an appointment, it will appear here. Browse our
            lawyers and schedule your consultation today.
          </p>
          <Link to="/">
            <button className="btn btn-lg border-none bg-[#0EA106] text-white">
              Book An Appointment
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default MyBooking;
