import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom"; // importing useNavigate to redirect after delete...


const AddForm = () => {
  const [authors, setAuthors] = useState([]); // variable to store...
  const navigate = useNavigate(); // To programmatically navigate after deletion...

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`); // variable to fetch...
    // console.table(response.data);
    setAuthors(response.data);
  };

  useEffect(() => {
    getAuthors(); // something to run the function...
  }, []);

  const [rating, setRating] = useState(0); // State for rating
  const [hover, setHover] = useState(0); // State for hover effect

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Collect form data
      const formData = new FormData(event.target);
      // Post data to API
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        genre: formData.get("genre"),
        author: formData.get("author"),
        datePublished: formData.get("datePublished"),
        content: formData.get("content"),
        description: formData.get("description"),
        // publisher: formData.get("publisher"),
        // pageCount: formData.get("page-count"),
        // rating: rating, // Submit the star rating
      });
      console.log("Form submitted successfully:", response.data);
      navigate("/"); // Redirect to book list after adding to library...
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="form w-[100%] h-[160vh] pt-5 bg-cover">
      <form
        onSubmit={handleSubmit}
        className="w-fit bg-gray-100 mx-auto border-4 rounded-2xl"
      >
        <div className="p-10 space-y-7">
          <h3 className="flex justify-center mb-5 font-semibold text-3xl">
            Add A New Book
          </h3>
          <hr className="border-2 border-themeColor" />
          <div className="flex gap-10 items-center">
            <label htmlFor="title" className="w-32 font-semibold text-lg">Book Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="border-2 w-full h-10 p-2"
            />
          </div>
          <div className="flex gap-10 items-center">
            <label htmlFor="author" className="w-32 font-semibold text-lg">Author</label>
            <select className="w-full h-10 p-2 border-2" name="author" id="author">
              <option disabled defaultValue={"Select an Author"}>Choose an Author</option>
              {authors.map((author) => {
                return (
                  <option key={author._id} value={author._id}  >
                    {author.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-56">
              <label htmlFor="coverPicture" className="w-32 font-semibold text-lg">Cover Page</label>
              <input
                type="file"
                name="coverPicture"
                id="coverPicture"
                className="border-2 h-10 p-1"
              />
            </div>
            <div className="flex flex-col w-36">
              <label htmlFor="datePublished" className="font-semibold text-lg">Year of Publish</label>
              <input
                type="date"
                name="datePublished"
                id="datePublished"
                className="border-2 h-10 p-2"
              />
            </div>
            <div className="flex flex-col w-36">
              <label htmlFor="page-count" className="w-32 font-semibold text-lg">Page Count</label>
              <input
                type="number"
                name="page-count"
                id="page-count"
                placeholder="ex:200"
                className="border-2 h-10 p-2"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col w-40">
              <label htmlFor="genre" className="font-semibold text-lg">Genre</label>
              <input
                type="text"
                name="genre"
                id="genre"
                list="genre-options"
                className="border-2 h-10 p-2"
              />
              <datalist id="genre-options">
                <option value="Fiction"></option>
                <option value="Non-Fiction"></option>
                <option value="Poetry"></option>
                <option value="Drama"></option>
              </datalist>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="content" className="font-semibold text-lg">Headline</label>
              <input
                type="text"
                name="content"
                id="content"
                placeholder="Brief caption..."
                className="border-2 h-10 p-2"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="font-semibold text-lg">Why do you recommend this book?</label>
            <textarea
              name="description"
              placeholder="Leave a description..."
              className="border-2 h-28 p-2"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="rating" className="font-semibold text-lg">Overall Rating</label>
              <div className="flex">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={
                        index <= (hover || rating)
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }
                      onClick={() => setRating(index)} // Set rating on click
                      onMouseEnter={() => setHover(index)} // Set hover effect
                      onMouseLeave={() => setHover(rating)} // Reset hover to current rating
                    >
                      <span className="text-4xl">&#9733;</span> {/* Star Icon */}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold text-lg">Price</label>
              <div className="w-full">
                <span className="text-2xl text-gray-500">$</span>{" "}
                <input type="number" name="price" id="price" placeholder="Enter amount..." className="border-2 h-10 p-2 w-96" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="border-2 mx-60 w-48 text-2xl p-1 bg-themeColor text-white rounded-lg hover:underline hover:bg-blue-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
