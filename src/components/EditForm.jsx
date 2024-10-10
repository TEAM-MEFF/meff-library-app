import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const AddForm = () => {
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
        author: formData.get("author"),
        publisher: formData.get("publisher"),
        yearOfPublish: formData.get("year-of-publish"),
        pageCount: formData.get("page-count"),
        genre: formData.get("genre"),
        comment: formData.get("comment"),
        rating: rating, // Submit the star rating
      });
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <div className="w-[100%] h-[160vh] pt-28 bg-slate-700">
      <form
        onSubmit={handleSubmit}
        className="w-[50%] h-[90vh] bg-gray-100 mx-auto border-4 rounded-lg shadow-lg shadow-[black] "
      >
        <br />
        <div className="m-14">
          <h3 className="flex justify-center mb-7 font-semibold text-3xl">
            Edit Book
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
          <div className="flex">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              className="border-2 ml-[101px] w-[25rem]"
            />
          </div>
          <br />
          <div className="flex">
            <div className="flex">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                name="genre"
                id="genre"
                list="genre-options"
                className="border-2 ml-[106px] w-[25rem]"
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
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                name="publisher"
                id="publisher"
                className="border-2"
                list="publisher-options"
              />
              <datalist id="publisher-options">
                <option value="Fiction"></option>
                <option value="Non-Fiction"></option>
                <option value="Poetry"></option>
                <option value="Drama"></option>
              </datalist>
            </div>
            <div className="flex flex-col ml-52">
              <label htmlFor="year-of-publish">Year of Publish</label>
              <input
                type="date"
                name="year-of-publish"
                id="year-of-publish"
                className="border-2 rounded-lg w-40"
              />
            </div>
          </div><br /><br /><br />

          <button
            type="submit"
            className="border-2 flex ml-20 w-96 h-10 justify-center items-center bg-[#0E345A] text-white rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
