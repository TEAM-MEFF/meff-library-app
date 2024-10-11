import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const AddForm = () => {
  const [authors, setAuthors] = useState([]); // variable to store...

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
        author: formData.get("author.name"),
        publisher: formData.get("publisher"),
        yearOfPublish: formData.get("year-of-publish"),
        pageCount: formData.get("page-count"),
        genre: formData.get("genre"),
        description: formData.get("description"),
        rating: rating, // Submit the star rating
      });
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="form w-[100%] h-[160vh] pt-20  bg-cover">
      <form
        onSubmit={handleSubmit}
        className="w-fit h-[130vh] bg-gray-100 mx-auto border-4 rounded-lg"
      >
        <br />
        <div className="m-14">
          <h3 className="flex justify-center mb-7 font-semibold text-3xl">
            Add A New Book
          </h3>
          <hr className="border-2 border-[#0E345A]" />
          <div className="mt-10">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="border-2 ml-20 w-[25rem]"
            />
          </div>
          <br />
          <label htmlFor="author">Author</label>

          <select className="ml-24 w-[25rem] h-7" name="author" id="author">
            <option disabled selected></option>
            {authors.map((author) => {
              return (
                <option key={author._id} value={author._id}  >
                  {author.name}
                </option>
              );
            })}
          </select>
          <br />

          <br />
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="coverpage">Cover Page</label>
              <input
                type="file"
                name="coverpage"
                id="coverpage"
                className="border-2"
              />
            </div>
            <div className="flex flex-col ml-20">
              <label htmlFor="year-of-publish">Year of Publish</label>
              <input
                type="date"
                name="year-of-publish"
                id="year-of-publish"
                className="border-2 rounded-lg w-40"
              />
            </div>
          </div>
          <br />
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="page-count">Page Count</label>
              <input
                type="number"
                name="page-count"
                id="page-count"
                placeholder="ex:200"
                className="border-2"
              />
            </div>
            <div className="flex flex-col ml-44">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                name="genre"
                id="genre"
                list="genre-options"
                className="border-2"
              />
              <datalist id="genre-options">
                <option value="Fiction"></option>
                <option value="Non-Fiction"></option>
                <option value="Poetry"></option>
                <option value="Drama"></option>
              </datalist>
            </div>
          </div>
          <br />
          <div className="flex flex-col">
            <label htmlFor="description">Why do you recommend this book?</label>
            <textarea
              name="description"
              placeholder="Leave a description..."
              className="border-2 h-28"
              id="description"
            ></textarea>
          </div>
          <br />
          <div className="flex flex-col">
            <label htmlFor="rating">Overall Rating</label>
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
          <br />
          <button
            type="submit"
            className="border-2 flex mx-60 w-36 h-10 justify-center items-center bg-[#0E345A] text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
