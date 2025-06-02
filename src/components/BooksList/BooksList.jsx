import { useLocation } from "react-router-dom";
import useBookContext from "../../hooks/useBookContext";
import { Book } from "../Book/Book";
import "./BooksList.css";

export const BooksList = ({ className }) => {
  const { books, idFavorite } = useBookContext();

  const location = useLocation();

  const getArray = () => {
    if (location.pathname === "/favorites") {
      return idFavorite.favoriteBooks;
    }
    if (location.pathname === "/") {
      return books;
    }
  };

  return (
    <ul className={className}>
      {getArray().map((book, index) => (
        <Book key={index} book={book} className={`${className}-element`} />
      ))}
    </ul>
  );
};
