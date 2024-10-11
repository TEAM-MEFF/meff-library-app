import React, { useState } from "react";
import FloatingAddButton from "../../components/Floatingbutton";

const Library = () => {
  const [books, setBooks] = useState([]);

  const addBook = () => {
    // Handle adding books
    const newBook = prompt("Enter the book title:");
    if (newBook) {
      setBooks([...books, newBook]);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Library</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className="mt-4 text-lg">
            {book}
          </li>
        ))}
      </ul>
      <FloatingAddButton onClick={addBook} />
    </div>
  );
};

export default Library;
