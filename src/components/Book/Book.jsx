import { Hurt } from "../../img/Hurt";
import "./Book.css";

export const Book = ({
  book,
  handleClickToFavorite,
  idFavorite,
  className,
}) => {
  const getColor = () => {
    return idFavorite.includes(
      book.cover_edition_key || book.lending_edition_s || book.key,
    )
      ? "#ff00ff"
      : "#00ffff";
  };

  return (
    <li className={className}>
      <div>
        <img
          className={`${className}-img`}
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://fortune.com/img-assets/wp-content/uploads/2024/03/Default-book.jpg?w=768&q=75"
          }
          alt={book.author_name}
        />
        <h4 className={`${className}-author`}>{book.author_name}</h4>
        <p className={`${className}-year`}>
          <span className={`${className}-label`}>📅 First Published:</span>{" "}
          {book.first_publish_year}
        </p>
        <p className={`${className}-language`}>
          <span className={`${className}-label`}>🌐 Language:</span>{" "}
          {book.language}
        </p>
        <p className={`${className}-title`}>
          <span className={`${className}-label`}>📖 Title:</span> ${book.title}
        </p>
      </div>
      <button
        className={`${className}-button`}
        style={{ border: `2px solid ${getColor()}` }}
        onClick={() =>
          handleClickToFavorite(
            book.cover_edition_key || book.lending_edition_s || book.key,
            book,
          )
        }
      >
        <Hurt color={getColor()} size="16" />
      </button>
    </li>
  );
};
