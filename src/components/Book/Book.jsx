import toast from "react-hot-toast";
import { Hurt } from "../../assets/img/Hurt";
import useBookContext from "../../hooks/useBookContext";
import "./Book.css";

export const Book = ({ book, className }) => {
  const { idFavorite, setIdFavorite } = useBookContext();

  const handleClickToFavorite = (id, book) => {
    if (!id) return;

    const isAlreadyFavorite = idFavorite.ids.includes(id);
    const updated = {
      ids: isAlreadyFavorite
        ? idFavorite.ids.filter((prevId) => prevId !== id)
        : [...idFavorite.ids, id],
      favoriteBooks: isAlreadyFavorite
        ? idFavorite.favoriteBooks.filter(
            (prevId) =>
              (prevId.cover_edition_key ||
                prevId.lending_edition_s ||
                prevId.key) !== id,
          )
        : [...idFavorite.favoriteBooks, book],
    };

    setIdFavorite(updated);

    if (isAlreadyFavorite) {
      toast.error(`${book.author_name} was removed from favorite`);
    } else {
      toast.success(`${book.author_name} was added to favorite`);
    }
  };

  const isFavorite = idFavorite.ids.includes(
    book.cover_edition_key || book.lending_edition_s || book.key,
  );

  return (
    <li className={className}>
      <div
        className={`books-element-img-container ${isFavorite ? "favorite" : ""}`}
      >
        <img
          className={`${className}-img`}
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://fortune.com/img-assets/wp-content/uploads/2024/03/Default-book.jpg?w=768&q=75"
          }
          alt={book.author_name}
        />
      </div>
      <div className={`${className}-content`}>
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
          <span className={`${className}-label`}>📖 Title:</span> {book.title}
        </p>
        <button
          className={`${className}-button ${isFavorite ? "favorite" : ""}`}
          onClick={() =>
            handleClickToFavorite(
              book.cover_edition_key || book.lending_edition_s || book.key,
              book,
            )
          }
        >
          <Hurt color={isFavorite ? "#FF007A" : "#00E7FF"} size="16" />
        </button>
      </div>
    </li>
  );
};
