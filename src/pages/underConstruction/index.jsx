import React from "react";
import NavbarResponsive from "../../components/NavbarResponsive";
import pic from "./under.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigage = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigage("/login");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <NavbarResponsive />
      <div className="flex flex-col justify-center items-center">
        <img className="w-64 md:w-96 lg:w-fit" src={pic} alt="pic" />
        <div className="space-y-5">
          <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold">
            Our website is under construction
          </p>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Enter your email..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-base focus:ring-blue-600"
            />
            <button
              type="submit"
              className="bg-themeColor text-white px-3 rounded-lg hover:bg-[#0e345ade] transition-colors text-nowrap py-2"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
