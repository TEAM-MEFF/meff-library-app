import React from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const AddForm = () => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //Collect a form data
      const formData = new FormData(event.target);
      //Post data to api
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        title: formData.get("author"),
        title: formData.get("publisher"),
        title: formData.get("year of publish"),
        title: formData.get("page count"),
        title: formData.get("genre"),
        title: formData.get("comment"),
        title: formData.get("overall rating"),
        title: formData.get("submit"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] bg-blue-500">
      <form onSubmit={handleSubmit} className="w-[50%] h-[80%] bg-gray-100">
        <h5>AddBook Form</h5>
        <div action="">
          <label htmlFor="title">Book Title</label>
          <input type="text" name="title" id="title" className="border-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" className="border-2" />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              name="publisher"
              id="publisher"
              className="border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year-of-publish">Year of Publish</label>
            <input
              type="date"
              name="year-of-publish"
              id="year-of-publish"
              placeholder="Please Select"
              className="border-2"
            />
          </div>
          <div></div>
        </div>
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
          <div className="flex flex-col">
            <label htmlFor="genre">Genre</label>
            <input
              type="genre"
              name="genre"
              id="genre"
              list="genre"
              className="border-2"
            />
            <dropdown id="genre">
              <option value="Fiction"></option>
              <option value="Non-Fiction"></option>
              <option value="Poetry"></option>
              <option value="Drama"></option>
            </dropdown>
          </div>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="comment">Why do you recommend this book</label>
          <textarea
            type="text"
            name="comment"
            placeholder="Leave a comment..."
            className="border-2"
            id="comment"
          ></textarea>
        </div>
        <div>
          <p>Overall rating</p>
        </div>
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
