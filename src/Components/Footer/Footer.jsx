import React from "react";
import footerLogo from "../../assets/logo-footer.png";
import { NavLink } from "react-router";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#0f0f0f] px-4 py-8 sm:p-10 text-white">
      <div className="flex items-center gap-1">
        <img className="w-8" src={footerLogo} alt="" />
        <h1 className="text-2xl font-medium">
          Low.<span className="font-semibold">BD</span>
        </h1>
      </div>
      <ul className="footer-menu grid grid-flow-col gap-4">
        <NavLink
          onClick={() => window.scrollTo(0, 0)}
          className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo(0, 0)}
          className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
          to="/mybooking"
        >
          My Booking
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo(0, 0)}
          className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo(0, 0)}
          className="text-lg font-medium hover:text-[#0EA106] duration-500 w-fit"
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
      <ul>
        <hr />
        <div className="grid grid-flow-col gap-4 items-center">
          <a
            href="https://www.facebook.com/md.shakilsarker.5832"
            target="_blank"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://x.com/sarkar34494" target="_blank">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/shakil.sarkar72/" target="_blank">
            <img width='45px' src={instagram} alt="linkedin" />
          </a>
        </div>
      </ul>
      <div className=" w-full border-t-2 border-dashed border-gray-500"></div>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right Low.BD</p>
      </aside>
    </footer>
  );
};

export default Footer;
