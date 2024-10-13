import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
import SimilarBooks from "../pages/bookDetails/SimilarBooks";

const BookDetails = () => {
    const { id } = useParams(); // this helps us to get book ID from URL...
    const [book, setBook] = useState(null);
    const [isEditing, setIsEditing] = useState(false); // for showing the edit form when need be...
    const [updatedBook, setUpdatedBook] = useState({}); // for holding updated book details...

    const getBookDetails = async () => {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        setBook(response.data);
    };

    useEffect(() => {
        getBookDetails();
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(!isEditing); // Toggle edit form visibility...
        setUpdatedBook(book); // pre-fill the form with current book details...
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBook({ ...updatedBook, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // send updated book details to the server...
        await axios.put(`${BASE_URL}/books/${id}`, updatedBook);
        setIsEditting(false); // hide the form after submission
        getBookDetails(); // refresh book details after updated
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
                            {!isEditting ? (
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
                                        value={updatedBook.title}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <input
                                        type="text"
                                        name="author"
                                        value={updatedBook.author.name}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <input
                                        type="text"
                                        name="genre"
                                        value={updatedBook.genre}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <textarea
                                        name="description"
                                        value={updatedBook.description}
                                        onChange={handleInputChange}
                                        className="border-2 w-full px-2 py-1 mb-4"
                                    />
                                    <button type="submit" className="bg-themeColor text-white py-2 px-4 rounded">Save Changes</button>
                                </form>
                            )
                            }
                            <div className="cta flex gap-4">
                                <button className="flex gap-2 py-2 px-2 rounded-full shadow-sm items-center bg-gray-200 text-gray-800 hover:bg-themeColor hover:text-white absolute right-4 top-2">
                                    <IonIcon name="heart-outline" className=" md:text-2xl" />
                                </button>
                                <button className="flex gap-2 py-2 px-2 rounded-full shadow-sm items-center bg-gray-200 text-gray-800 hover:bg-[#d11a2a] hover:text-white absolute right-4 top-16">
                                    <IonIcon name="trash-outline" className=" md:text-2xl" />
                                </button>
                                <button className="flex gap-2 py-2 px-3 rounded-lg shadow-md items-center bg-gray-200 text-gray-800 hover:bg-themeColor hover:text-white" onSubmit={handleEditClick}>
                                    <p className=" text-base">{isEditing ? 'Cancel' : 'Edit Book'}</p>
                                    <IonIcon name={isEditing ? "close-outline" : "create-outline"} className=" md:text-base " />
                                </button>
                                <button className="flex gap-2 py-2 px-3 rounded-lg shadow-md items-center bg-gray-200 text-gray-800 hover:bg-themeColor hover:text-white">
                                    <p className=" text-base">Add to Cart</p>
                                    <IonIcon name="cart-outline" className=" md:text-base" />
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

            <div>
                {/* <Testimonies /> */}
                {/* <br /> */}
                {/* <h1>Hi</h1> */}
                {/* <Library /> */}
                {/* <EditForm /> */}
                {/* <button className="border-2">Submit</button> */}
            </div>
        </div>
    )
}

export default BookDetails;