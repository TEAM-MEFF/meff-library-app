import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";
import axios from "axios";

const BookFetch = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="bg-white 2xl:max-w-7xl bg-red-200 mx-auto">
      <div>
        <h1 className="text-3xl text-themeColor font-bold pl-4 md:pl-8 pt-14">
          Featured Books
        </h1>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 py-4 px-2 max-w-6xl">
          {books.map((books, index) => {
            console.log(books);
            return (
              <div className="flex mx-auto bg-white rounded-lg shadow-sm hover:shadow-md border-[0.1px] relative">
                <div className="w-[190px] md:w-[235px] items-center text-center rounded-lg">
                  <div
                    key={index}
                    className="py-4 rounded-lg items-center h-full justify-between flex flex-col"
                  >
                    <img
                      src={books.coverPicture}
                      alt="book-image"
                      className="h-[180px] w-[140px] md:h-[200px] md:w-[160px] mx-auto"
                    />
                    {/* New tag - starting */}
                    <div className="absolute right-0 top-0">
                      <p className="font-bold text-white bg-red-500 px-1 md:px-2 py-1 shadow-md text-sm md:text-base">
                        NEW
                      </p>
                      {/* left arrow... */}
                      <div className="absolute top-0 -left-4 h-full w-5 border-red-500 bg-red-500 border-r-2 rounded-l-full"></div>
                    </div>
                    {/* New tag - ending */}
                    <div>
                      <h2 className="text-base md:text-lg text-themeColor mt-2 font-semibold">
                        {books.title}
                      </h2>
                      <p className="text-gray-500 text-sm md:text-base">
                        {books.genre}
                      </p>
                      <p className="text-black font-medium text-sm md:text-base">
                        {books.author.name}
                      </p>
                    </div>
                    <div className="flex gap-2 md:gap-2 mx-auto items-center justify-center mt-2">
                      <Link to={`/books/${books._id}`}>
                        <button className="px-2 py-1 border-themeColor text-themeColor rounded border-2 h-10 hover:bg-themeColor hover:text-white hover:border-themeColor text-sm md:text-base">
                          Preview
                        </button>
                      </Link>
                      <button className="px-2 py-2 bg-themeColor text-white rounded hover:border-blue-600 hover:bg-blue-600 text-sm md:text-base">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BookFetch;
