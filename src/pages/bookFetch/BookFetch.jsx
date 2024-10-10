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
                <Link to="/add-new">Add new book bro!</Link>
                <h1 className="text-3xl text-blue-900 font-bold p-5">Featured Books</h1>
                <div className="container mx-auto flex flex-wrap gap-5 py-4">
                    {
                        books.map((books, index) => {
                            console.log(books);
                            return (
                                <div className="flex">
                                    < div className="w-[300px] ">
                                        <div key={index} className="border p-4 rounded-lg shadow-md">
                                            <img src={books.img} alt="book-image" />
                                            <h2 className="text-xl font-semibold">{books.title}</h2>
                                            <p className="text-gray-600">{books.author.name}</p>
                                            <p className="text-gray-500">{books.genre}</p>
                                            <div className='flex gap-2'>
                                                <button className="mt-4 px-4 py-2 border-blue-900 text-blue-900 rounded border-2">
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