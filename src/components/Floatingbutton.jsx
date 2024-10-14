import React from "react";

const FloatingAddButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-themeColor hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
    >
      +
    </button>
  );
};

export default FloatingAddButton;
