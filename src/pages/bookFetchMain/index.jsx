import React from "react";
import { Link } from "react-router-dom";
import K from "../../constants";

// mapping on the constants...

const BookFetchMain = () => {
  return (
    <div className="2xl:max-w-7xl mx-auto">
      <h1 className="text-3xl text-themeColor font-bold pl-4 md:pl-8 pt-14">
        Best Selling Books
      </h1>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 py-4 px-2 max-w-6xl">
        {K.BOOKS.map((book, index) => {
          console.log(book);
          return (
            <div className="flex mx-auto bg-white rounded-lg shadow-sm hover:shadow-md border-[0.1px]">
              <div className="w-[190px] md:w-[235px] items-center text-center rounded-lg">
                <div
                  key={index}
                  className="py-4 rounded-lg items-center h-full justify-between flex flex-col"
                >
                  <img
                    src={book.coverPicture}
                    alt="book-image"
                    className="mx-auto"
                  />
                  <h2 className="text-base md:text-lg text-themeColor mt-2 font-semibold">
                    {book.title}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    {book.genre}
                  </p>
                  <p className="text-black font-medium text-sm md:text-base">
                    {book.author}
                  </p>
                  <div className="flex gap-2 md:gap-2 mx-auto items-center justify-center mt-2">
                    <Link to={`/books/${book._id}`}>
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
  );
};
export default BookFetchMain;
