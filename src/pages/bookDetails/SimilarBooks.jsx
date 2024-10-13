import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { BASE_URL } from "../../constants";
import axios from 'axios';

const SimilarBooks = () => {

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
                <div className="container mx-auto flex flex-wrap gap-5 py-1">
                    {
                        books.map((books, index) => {
                            console.log(books);
                            return (
                                <div className="flex mx-auto">
                                    <Link to={`/books/${books._id}`}>
                                        < div className="w-[135px] items-center text-center">
                                            <div key={index} className="border p-4 rounded-lg shadow-md h-[320px] flex flex-col justify-start">
                                                <img src={books.coverPicture} alt="book-image" className="h-[160px] w-[100px] mx-auto" />
                                                <div>
                                                    <h2 className="text-base font-semibold">{books.title}</h2>
                                                    <p className="text-gray-500 text-sm">{books.genre}</p>
                                                    <p className="text-black font-medium text-sm">{books.author.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
export default SimilarBooks