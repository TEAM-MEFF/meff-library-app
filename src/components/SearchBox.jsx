import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={`px-2 py-1 md:py-2 mx-5 w-[110px] sm:w-[270px] md:w-[400px] lg:w-[600px] ${
        inputValue.length > 0
          ? "w-[160px] sm:w-[350px] md:w-[500px] lg:w-[700px]"
          : "hover:w-[160px] hover:mx-2 sm:hover:w-[350px] md:hover:w-[500px] lg:hover:w-[700px]"
      } h-fit bg-themeColor rounded-full flex items-center transition-all duration-300`}
    >
      <div className="flex items-center justify-center fill-white">
        <IonIcon
          name="search"
          className="text-xl sm:text-2xl md:text-3xl text-white"
        />
      </div>
      <input
        type="search"
        className="outline-none text-base bg-transparent w-full text-white font-normal px-1"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by title, author, subject or ISBN..."
      />
    </div>
  );
};

export default SearchBox;
