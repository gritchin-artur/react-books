import { useEffect, useState } from "react";
import BookContext from "../context/BookContext";

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [idFavorite, setIdFavorite] = useState(() => {
    const saved = localStorage.getItem("idFavorite");
    return saved ? JSON.parse(saved) : { ids: [], favoriteBooks: [] };
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("idFavorite", JSON.stringify(idFavorite));
    }, 1000);
  }, [idFavorite]);

  return (
    <BookContext.Provider
      value={{ books, setBooks, idFavorite, setIdFavorite }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
