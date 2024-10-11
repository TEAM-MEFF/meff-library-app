import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import K from '../../constants'
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
                <h1 className="text-3xl text-blue-900 font-bold pl-10 pt-14">Featured Books</h1>
                <div className="container mx-auto flex flex-wrap gap-5 py-4">
                    {
                        books.map((books, index) => {
                            console.log(books);
                            return (
                                <div className="flex mx-auto">
                                    < div className="w-[235px] items-center text-center">
                                        <div key={index} className="border p-4 rounded-lg shadow-md">
                                            <img src={books.coverPicture} alt="book-image" />
                                            <h2 className="text-xl font-semibold">{books.title}</h2>
                                            <p className="text-gray-500">{books.genre}</p>
                                            <p className="text-black font-medium">{books.author.name}</p>
                                            <div className='flex gap-2'>
                                                <button className="mt-4 px-2 py-1 border-blue-900 text-blue-900 rounded border-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
                                                    Preview
                                                </button>
                                                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600">
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