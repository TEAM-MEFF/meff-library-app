import React from 'react'
import { Link } from 'react-router-dom'
import K from '../../constants'


// mapping on the constants...

const BookFetchMain = () => {

    return (
        <div>
            <h1 className="text-3xl text-themeColor font-bold pl-10 pt-14">Best Selling Books</h1>
            <div className="container mx-auto flex flex-wrap gap-5 py-4">
                {
                    K.BOOKS.map((book, index) => {
                        console.log(book);
                        return (
                            <div className="flex mx-auto">
                                < div className="w-[235px] items-center text-center">
                                    <div key={index} className="border p-4 rounded-lg shadow-md items-center">
                                        <img src={book.coverPicture} alt="book-image" className='mx-auto' />
                                        <h2 className="text-xl text-themeColor mt-5 font-semibold">{book.title}</h2>
                                        <p className="text-gray-500">{book.genre}</p>
                                        <p className="text-black font-medium">{book.author}</p>
                                        <div className='flex gap-2'>
                                            <Link to={`/books/${book._id}`}>
                                                <button className="mt-4 px-2 py-1 border-themeColor text-themeColor rounded border-2 h-10 hover:bg-themeColor hover:text-white hover:border-themeColor">
                                                    Preview
                                                </button>
                                            </Link>
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
        </div >
    )
}
export default BookFetchMain