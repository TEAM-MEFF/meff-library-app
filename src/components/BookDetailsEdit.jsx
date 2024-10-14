import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import SimilarBooks from "../pages/bookDetails/SimilarBooks";

const BookDetailsEdit = () => {
    const { id } = useParams(); // this helps us to get book ID from URL...
    const [book, setBook] = useState(null);
    const [editMode, setEditMode] = useState(false); // for showing the edit form when need be...
    const [updatedBook, setUpdatedBook] = useState({}); // for holding updated book details...
    const navigate = useNavigate();

    const getBookDetails = async () => {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        setBook(response.data);
        setUpdatedBook(response.data); // Initialize updated book with the current book details
    };

    useEffect(() => {
        getBookDetails();
    }, [id]);

    const handleEditClick = () => {
        setEditMode(true); // Toggle edit form visibility...
    };

    const handleSaveClick = async () => {
        try {
            await axios.patch(`${BASE_URL}/books/${id}`, updatedBook);
            setIsEditting(false); // hide the form after submission
            getBookDetails(); // refresh book details after updated
        } catch (error) {
            console.error("Error updating book", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBook({ ...updatedBook, [name]: value }); // update book fields as the user types
    };

    if (!book)
        return <div>Loading...</div>

    return (
        <div>
            <div className="grid grid-cols-4 p-5 gap-5">
                <div className="container col-span-3 border shadow-md h-fit pl-5 sticky top-32">
                    <h1 className="text-3xl text-themeColor font-bold p-2">Book Details</h1>
                    <div className="flex justify-between p-2">
                        <img src={book.coverPicture} alt={book.title} className="h-[400px] w-1/3 shadow-md" />
                        <div className="flex flex-col justify-between w-2/3 relative px-10">
                            {editMode ? (
                                // Edit Form
                                <>
                                    <input
                                        type="text"
                                        name="title"
                                        value={updatedBook.title}
                                        onChange={handleChange}
                                        className="text-5xl font-bold text-themeColor"
                                    />
                                    <input
                                        type="text"
                                        name="author"
                                        value={updatedBook.author.name}
                                        onChange={handleChange}
                                        className="text-3xl"
                                    />
                                    <input
                                        type="text"
                                        name="genre"
                                        value={updatedBook.genre}
                                        onChange={handleChange}
                                        className="text-lg"
                                    />
                                    <textarea
                                        name="description"
                                        value={updatedBook.description}
                                        onChange={handleChange}
                                        className="text-lg"
                                    />
                                    <button onClick={handleSaveClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                        Save Changes
                                    </button>
                                </>
                            ) : (
                                // Book View Mode
                                <>
                                    <h1 className="text-5xl font-bold text-themeColor">{book.title}</h1>
                                    <div className="desc flex flex-col gap-1">
                                        <p className="text-gray-400 text-2xl">By: <span className="text-black text-3xl">{book.author.name}</span></p>
                                        <p className="text-gray-400 mt-4 text-base">Genre: <span className="text-black text-lg">{book.genre}</span></p>
                                        <p className="text-gray-400 text-base">Published on: <span className="text-black text-lg">{new Date(book.datePublished).toDateString()}</span></p>
                                        <p className="text-gray-400 text-base">Headline: <span className="text-black text-lg">{book.content}</span></p>
                                        <p className="text-gray-400 text-base">About Book: <span className="text-black text-lg">{book.description}</span></p>
                                    </div>
                                    <button onClick={handleEditClick} className="flex gap-2 py-2 px-3 rounded-lg shadow-md items-center bg-gray-200 text-gray-800 hover:bg-themeColor hover:text-white">
                                        <p className="text-base">Edit Book</p>
                                        <IonIcon name="create-outline" className="md:text-base" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="container col-span-3 border shadow-md h-fit pl-5">
                        <h1 className="text-3xl text-themeColor font-bold p-2">Similar Books</h1>
                        <SimilarBooks />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookDetailsEdit;