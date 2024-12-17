import React from "react";
import NavbarResponsive from "../../components/NavbarResponsive";
import pic from "./under.png";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <NavbarResponsive />
      <div className="flex flex-col justify-center items-center">
        <img className="w-64 md:w-96 lg:w-fit" src={pic} alt="pic" />
        <div className="space-y-5">
          <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">
            Our website is under construction
          </p>
          <div className="flex gap-2">
            <input
              required
              type="text"
              placeholder="Enter your email..."
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-base focus:ring-blue-600"
            />
            <button
              type="submit"
              className=" bg-themeColor text-white px-3 rounded-lg hover:bg-[#0e345ade] transition-colors text-nowrap py-3"
            >
              <Link to="/login">Notify Me</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
