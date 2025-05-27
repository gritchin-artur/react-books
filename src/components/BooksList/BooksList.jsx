import { Book } from "../Book/Book";
import "./BooksList.css";

export const BooksList = ({
  books,
  handleClickToFavorite,
  idFavorite,
  className,
}) => {
  return (
    <ul className={className}>
      {books.map((book, index) => (
        <Book
          key={index}
          book={book}
          handleClickToFavorite={handleClickToFavorite}
          idFavorite={idFavorite}
          className={`${className}-element`}
        />
      ))}
    </ul>
  );
};
