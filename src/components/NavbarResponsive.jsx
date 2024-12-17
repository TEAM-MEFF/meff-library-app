import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IonIcon from "@reacticons/ionicons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavbarResponsive = () => {
  let [open, setOpen] = useState(false);

  return (
    <header className="flex px-6 md:flex-col bg-slate-200 w-full fixed top-0 z-50">
      <div className="flex justify-around items-center w-full mx-auto md:justify-between py-2 bg-slate-200 ">
        <div className="content-center items-center">
          <Link to={"/"}>
            <span className="bg-themeColor text-base md:text-lg lg:text-xl md:py-2 sm:px-2 py-1 px-1 text-white font-bold content-center text-center border-2 border-themeColor">
              MEFF
            </span>
            <span
              to={"/"}
              className="text-base md:text-lg lg:text-xl md:py-2 sm:px-2 py-1 px-1 text-themeColor content-center hover:bg-themeColor hover:text-white border-themeColor border-2 text-center"
            >
              LIBRARY
            </span>
          </Link>
        </div>
        <SearchBox />
        <div
          className={`sm:static sm:flex sm:items-center sm:gap-3 py-1 space-x-1 w-[193px]  bg-slate-200 px-12 shadow-lg sm:shadow-none right-0 z-50 duration-500 ${
            open
              ? "absolute top-[300px] md:opacity-100 opacity-100"
              : "absolute top-[-500px] md:opacity-100 opacity-0"
          }`}
        >
          <Link to="/sign-up">
            <IonIcon
              name="person-circle"
              className="text-4xl md:text-5xl text-themeColor "
            />
          </Link>
          <Link>
            <IonIcon
              name="cart-outline"
              className="text-4xl md:text-5xl text-themeColor"
            />
          </Link>
        </div>
      </div>
      <nav className="flex items-center gap-2 w-full mx-auto py-2 justify-center bg-slate-200">
        <div
          className={`sm:min-h-fit sm:w-full md:min-h-fit md:w-auto md:z-auto z-[1] px-12 py-2 shadow-lg sm:shadow-none md:py-0 absolute md:static bg-slate-200 min-h-[20vh] right-0 flex items-center transition-all duration-500 ease-in-out ${
            open
              ? "top-14 opacity-100"
              : "top-[-500px] md:opacity-100 opacity-0"
          }`}
        >
          <div className="flex sm:flex-row mx-auto md:items-center gap-2 md:flex-row flex-col transition-all duration-1000 ease-in-out">
            <Link
              to="/"
              className="sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 hover:bg-themeColor hover:text-white rounded"
            >
              Home
            </Link>
            <Link
              to="/add-new"
              className="sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 hover:bg-themeColor hover:text-white rounded"
            >
              Add Book
            </Link>
            <Link
              to="/pending"
              className="sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 hover:bg-themeColor hover:text-white rounded"
            >
              Bookstore
            </Link>
            <Link
              to="/pending"
              className="sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 hover:bg-themeColor hover:text-white rounded"
            >
              Best Selling
            </Link>
            <Link
              to="/pending"
              className="sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 hover:bg-themeColor hover:text-white rounded"
            >
              About Us
            </Link>
            <Link
              to="/pending"
              className="sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 py-1 hover:bg-themeColor hover:text-white rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="menuIcon text-themeColor mx-2 cursor-pointer md:hidden text-4xl"
        >
          <IonIcon name={open ? "close" : "menu"} />
        </div>
      </nav>
    </header>
  );
};

export default NavbarResponsive;
