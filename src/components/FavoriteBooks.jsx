import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavoriteBooks = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Retrieve favorite books from localStorage when component mounts
    const savedFavorites = localStorage.getItem("favoriteBooks");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  if (favorites.length === 0) {
    return <p>No favorite books saved yet.</p>;
  }

  return (
    <div className="2xl:max-w-7xl mx-auto">
      <h1 className="text-3xl text-themeColor font-bold pl-10 pt-14">
        My Favorite Books
      </h1>
      <div className="container mx-auto flex gap-5 py-4">
        <div className="flex gap-5 items-center text-center">
          {favorites.map((book, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md h-[390px] w-[235px] flex flex-col justify-between"
            >
              <img
                src={book.coverPicture}
                alt="book-image"
                className="h-[200px] w-[160px] mx-auto"
              />
              <div>
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-gray-500">{book.genre}</p>
                <p className="text-black font-medium">{book.author.name}</p>
              </div>
              <div className="flex gap-2">
                <Link to={`/books/${book._id}`}>
                  <button className="mt-4 px-2 py-1 border-themeColor text-themeColor rounded border-2 h-10 hover:bg-themeColor hover:text-white hover:border-themeColor">
                    Preview
                  </button>
                </Link>
                <button className="mt-4 px-4 py-2 bg-themeColor text-white rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteBooks;
