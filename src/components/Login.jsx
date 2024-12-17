import React from "react";
import { Link } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

const Login = () => {
  return (
    <section className="flex flex-col md:flex-row gap-12 px-5 md:px-12 justify-center bg-slate-100 py-12 h-screen">
      <div className="flex flex-col items-left justify-center md:w-1/2 gap-4 md:gap-10">
        <div className="content-center items-center ">
          <Link to={"/"}>
            <span className="bg-themeColor text-xl md:text-2xl lg:text-3xl md:py-2 sm:px-2 py-1 px-1 text-white font-bold content-center text-center border-2 border-themeColor">
              MEFF
            </span>
            <span
              to={"/"}
              className="text-xl md:text-2xl lg:text-3xl md:py-2 sm:px-2 py-1 px-1 text-themeColor content-center hover:bg-themeColor hover:text-white border-themeColor border-2 text-center"
            >
              LIBRARY
            </span>
          </Link>
        </div>
        <div>
          <p className="text-lg md:text-xl mb-2 md:mb-5">
            Welcome{" "}
            <span className="italic underline font-semibold">back!</span>🧠
          </p>
          <p className="text-lg md:text-xl mb-5">
            Access your account and dive right into our vast library of books
            and resources.📚
          </p>
          <p className="text-lg md:text-xl">We're glad to have you back!🫂🤗</p>
        </div>
      </div>

      <div className="flex justify-center items-center md:h-screen md:w-1/2">
        <form className="bg-white p-4 md:p-6 rounded-2xl shadow-xl max-w-md w-full">
          <p className="text-2xl font-semibold text-themeColor relative pl-10 md:mb-8">
            Sign In
            <span className="mt-[4px] absolute left-[4px] top-[5px] w-4 h-4 bg-themeColor rounded-full"></span>
            <span className=" mt-[5px] absolute left-0 top-0 w-6 h-6 animate-pulse bg-themeColor rounded-full opacity-10"></span>
          </p>
          <label className="flex gap-3 mb-1 mt-5">
            <input
              required
              type="email"
              placeholder="Enter your email..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-3"
            />
          </label>
          <label className="w-full relative">
            <input
              required
              type="password"
              placeholder="Enter your password..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-themeColor text-white py-3 rounded-lg hover:bg-[#0e345ade] transition-colors mb-3 md:mb-5"
          >
            <Link to="/">Login</Link>
          </button>
          <div>
            <div className="flex justify-center items-center gap-3 mx-auto">
              <hr className="w-1/4 md:w-1/3" />
              <p className="p line mb-3 text-gray-400 my-2">Or Sign In With</p>
              <hr className="w-1/4 md:w-1/3" />
            </div>
            <div className="flex-row">
              <button className="flex gap-4 border-[0.1px] px-5 py-3 rounded-full w-full items-center justify-center hover:border-themeColor transition-colors ease-in-out">
                <IonIcon name="logo-google" className="text-2xl" />
                Google
              </button>
              <button className="flex gap-4 border-[0.1px] px-5 py-3 rounded-full w-full items-center justify-center hover:border-themeColor transition-colors ease-in-out">
                <IonIcon name="logo-apple" className="text-2xl" />
                Apple
              </button>
            </div>
          </div>
          <p className="text-center text-base text-gray-600 mt-5">
            New Here?{" "}
            <Link
              className="text-blue-600 font-semibold hover:underline"
              to={"/sign-up"}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
