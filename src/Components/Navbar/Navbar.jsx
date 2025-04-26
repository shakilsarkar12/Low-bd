import React, {  useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "../../App.css";
import logo from "../../assets/logo.png";
import { RiCloseLine, RiMenuAddLine } from "react-icons/ri";
import { Bell } from "lucide-react";
import { getStoredLawyers } from "../../utility/AddLocalStorage";

const Navbar = ({ handleLogOut, user,data }) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
    const [bookingLawyers, setBookingLawyers] = useState([]);
  
    useEffect(() => {
      const storedLawyersData = getStoredLawyers();
      const myBooking = data.filter((lawyer) =>
        storedLawyersData.includes(lawyer.id)
      );
      setBookingLawyers(myBooking);
    }, [data]);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const initial = user?.displayName?.charAt(0).toUpperCase() || "";
  const joinedDate = user?.metadata?.creationTime || "N/A";

  return (
    <div className="navbar bg-base-100 px-0 relative">
      <div className="navbar-start">
        <div>
          <button onClick={handleMenu} className="lg:hidden mr-4 text-2xl z-50">
            {openMenu ? <RiMenuAddLine /> : <RiCloseLine />}
          </button>
          <ul
            className={`nav-menu absolute flex flex-col bg-base-100 rounded-box mt-3 p-6 shadow w-40 h-fit z-10 duration-300 ${
              !openMenu
                ? "scale-[1] top-16 left-2 opacity-100"
                : "scale-[0.4] top-4 -left-9 opacity-0"
            }`}
          >
            <NavLink
              className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
              to="/mybooking"
            >
              My Booking
            </NavLink>
            <NavLink
              className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-1">
          <img className="w-8" src={logo} alt="logo" />
          <h1 className="text-xl font-medium text-[#0f0f0f]">
            Low.<span className="font-semibold">BD</span>
          </h1>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="nav-menu menu menu-horizontal px-1 gap-16">
          <NavLink
            className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
            to="/mybooking"
          >
            My Booking
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        <button className="btn border-none bg-[#0EA106] text-white rounded-4xl">
          Contact Now
        </button>
        {user && (
          <div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button overflow-hidden z-50 md:z-auto"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-10 h-10 rounded-full ml-4 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${initial}&background=0EA106&color=fff`;
                      }}
                    />
                  ) : (
                    <div className="bg-blue-500 text-xl font-bold text-white flex items-center justify-center ml-4 rounded-full h-10 w-10">
                      {initial}
                    </div>
                  )}
                </label>
              </div>

              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="menu absolute right-4 bg-base-200 text-base-content min-h-full w-8/12 sm:h-6/12 md:w-4/12 p-6">
                  <div className="flex flex-col items-center mb-6">
                    {user?.photoURL ? (
                      <img
                        className="w-20 h-20 rounded-full"
                        src={user.photoURL}
                        alt="user"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${initial}&background=0EA106&color=fff`;
                        }}
                      />
                    ) : (
                      <div className="bg-blue-500 text-3xl font-bold text-white flex items-center justify-center rounded-full h-20 w-20">
                        {initial}
                      </div>
                    )}
                    <h2 className="text-xl font-semibold mt-2">
                      {user.displayName}
                    </h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-xs text-gray-400">
                      Joined: {joinedDate}
                    </p>
                  </div>

                  <button className="btn btn-outline w-full mb-4">
                    Manage Account
                  </button>

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Dark Mode</span>
                    <input
                      type="checkbox"
                      className="toggle toggle-success"
                      onChange={toggleDarkMode}
                      checked={darkMode}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Booked Lawyers</span>
                    <span className="badge badge-primary">
                      {bookingLawyers.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                  </div>

                  <button
                    onClick={handleLogOut}
                    className="btn bg-red-500 hover:bg-red-600 text-white w-full"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
