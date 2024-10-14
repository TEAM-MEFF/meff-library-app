import { useParams, useNavigate } from "react-router-dom"; // importing useNavigate to redirect after delete...
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import SimilarBooks from "../pages/bookDetails/SimilarBooks";

const BookDetails = () => {
    const { id } = useParams(); // this helps us to get book ID from URL...
    const navigate = useNavigate(); // To programmatically navigate after deletion...
    const [book, setBook] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // for showing the edit form when need be...
    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        datePublished: "",
        content: "",
        description: ""
    }); // for holding updated book details...
    const [favorites, setFavorites] = useState(() => {
        // retrieve favorite books from localStorage
        const savedFavorites = localStorage.getItem("favoriteBooks");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const getBookDetails = async () => {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        setBook(response.data);
        setFormData({
            title: response.data.title,
            genre: response.data.genre,
            datePublished: response.data.datePublished,
            content: response.data.content,
            description: response.data.description
        })
    };

    useEffect(() => {
        getBookDetails();
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(!isEditing); // Toggle edit form visibility...
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
        console.log("Updated book data: ", formData); // Log data after every input change
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted with data: ", formData); // Check if form data is captured
        try {
            const response = await axios.patch(`${BASE_URL}/books/${id}`, formData); // update all fields...
            console.log("Update successful: ", response.data); // Check if API call succeeds
            alert("Book details updated successfully!");
            setIsEditing(false); // Hide the form after submission
            getBookDetails(); // Refresh book details after update
        } catch (error) {
            alert("Failed to update the book.");
            console.error("Error updating the book: ", error);
        }
    };

    const handleDeleteClick = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            try {
                await axios.delete(`${BASE_URL}/books/${id}`);
                alert("Book deleted successfully!");
                navigate("/"); // Redirect to book list after deletion
            } catch (error) {
                console.error("Error deleting the book:", error);
                alert("Failed to delete the book.");
            }
        }
    };

    const handleFavoriteClick = () => {
        const updatedFavorites = [...favorites, book] // Add the current book to favorite...
        setFavorites(updatedFavorites);
        localStorage.setItem("favoriteBooks", JSON.stringify(updatedFavorites)); // save to localStorage
        alert("Book added favorites!");
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
                            {!isEditing ? (
                                <>
                                    <h1 className="text-5xl font-bold text-themeColor">{book.title}</h1>
                                    <div className="desc. flex flex-col gap-1">
                                        <p className="text-gray-400 text-2xl">By: <span className="text-black text-3xl">{book.author.name}</span></p>
                                        <p className="text-gray-400 mt-4 text-base">Genre: <span className="text-black text-lg">{book.genre}</span></p>
                                        <p className="text-gray-400 text-base">Published on: <span className="text-black text-lg">{new Date(book.datePublished).toDateString()}</span></p>
                                        <p className="text-gray-400 text-base ">Headline: <span className="text-black text-lg">{book.content}</span></p>
                                        <p className="text-gray-400 text-base ">About Book: <span className="text-black text-lg">{book.description}</span></p>
                                        <p className="text-gray-400 mt-2 text-base ">
                                            Rating:{" "}
                                            <span className="text-[#ffe234]">
                                                <IonIcon name="star" className=" md:text-xl" />
                                                <IonIcon name="star" className=" md:text-xl" />
                                                <IonIcon name="star" className=" md:text-xl" />
                                                <IonIcon name="star-half" className=" md:text-xl" />
                                                <IonIcon name="star-outline" className=" md:text-xl" />
                                            </span>{" "}
                                            <span className="text-sm">
                                                (39)
                                            </span>
                                        </p>
                                    </div>
                                    <div className="text-gray-500 my-2 text-2xl flex gap-2 items-end relative w-52">
                                        <p>Price:</p>
                                        <p className="text-black text-3xl">$49.99</p>
                                        <p className="text-xs text-themeColor absolute top-0 right-2">37% off</p>
                                        <p className="text-sm line-through mt-2">$79.99</p>
                                    </div>
                                </>
                            ) : (
                                <form onSubmit={handleFormSubmit}>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                        placeholder="Edit Title"
                                    />
                                    <input
                                        type="text"
                                        name="genre"
                                        value={formData.genre}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <input
                                        type="date"
                                        name="datePublished"
                                        value={formData.datePublished}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <input
                                        type="text"
                                        name="content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <button type="submit" className="bg-themeColor text-white py-2 px-4 rounded">Save Changes</button>
                                </form>
                            )
                            }
                            <div className="cta flex gap-2">
                                <button className="flex gap-2 py-2 px-2 rounded-full items-center bg-gray-200 text-gray-800 hover:bg-themeColor hover:text-white absolute right-4 top-2 shadow-md" onClick={handleFavoriteClick}>
                                    <IonIcon name="heart-outline" className=" md:text-2xl" />
                                </button>
                                <button className="flex gap-2 py-2 px-2 rounded-full shadow-md items-center bg-gray-200 text-gray-800 hover:bg-[#d11a2a] hover:text-white absolute right-4 top-16" onClick={handleDeleteClick}>
                                    <IonIcon name="trash-outline" className=" md:text-2xl" />
                                </button>
                                <button className="flex gap-2 py-2 px-3 rounded-lg shadow-md items-center border-2 border-themeColor text-themeColor hover:underline hover:bg-blue-900 hover:text-white" onClick={handleEditClick}>
                                    <p className=" text-base">{isEditing ? 'Cancel' : 'Edit Book'}</p>
                                    <IonIcon name={isEditing ? "close-outline" : "create-outline"} className=" md:text-lg " />
                                </button>
                                <button className="flex gap-2 py-2 px-3 rounded-lg shadow-md items-center bg-themeColor text-white hover:bg-blue-900 hover:underline hover:text-white">
                                    <p className=" text-base">Add to Cart</p>
                                    <IonIcon name="cart-outline" className=" md:text-lg" />
                                </button>
                            </div>
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
    )
}

export default BookDetails;