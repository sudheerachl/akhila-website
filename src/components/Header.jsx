import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const loadcontent = props.load;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-10 bg-white shadow-md">
      {/* Logo Section */}
      <div className="mb-4 sm:mb-0 text-center sm:text-left">
        <h2 className="text-lg sm:text-2xl font-bold text-blue-800">
          SAI SAHITHRA HOMOEO CLINIC
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <p id="home" className="text-sm sm:text-base">
          <Link
            to="/"
            onClick={loadcontent}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
        </p>
        <p id="about" className="text-sm sm:text-base">
          <Link
            to="/about"
            onClick={loadcontent}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About Us
          </Link>
        </p>
        <p id="contact" className="text-sm sm:text-base">
          <Link
            to="/contact"
            onClick={loadcontent}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
