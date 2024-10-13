import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { BASE_URL } from "../../constants";
import axios from 'axios';

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
        <div>
            <div>
                <h1 className="text-3xl text-themeColor font-bold pl-10 pt-14">Featured Books</h1>
                <div className="container mx-auto flex flex-wrap gap-5 py-4">
                    {
                        books.map((books, index) => {
                            console.log(books);
                            return (
                                <div className="flex mx-auto">
                                    < div className="w-[235px] items-center text-center">
                                        <div key={index} className="border p-4 rounded-lg shadow-md h-[390px] flex flex-col justify-between">
                                            <img src={books.coverPicture} alt="book-image" className="h-[200px] w-[160px] mx-auto" />
                                            <div>
                                                <h2 className="text-xl font-semibold">{books.title}</h2>
                                                <p className="text-gray-500">{books.genre}</p>
                                                <p className="text-black font-medium">{books.author.name}</p>
                                            </div>
                                            <div className='flex gap-2'><Link to={`/books/${books._id}`}>
                                                <button className="mt-4 px-2 py-1 border-themeColor text-themeColor rounded border-2 h-10 hover:bg-themeColor hover:text-white hover:border-themeColor">
                                                    Preview
                                                </button></Link>
                                                <button className="mt-4 px-4 py-2 bg-themeColor text-white rounded hover:bg-blue-600">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
export default BookFetch