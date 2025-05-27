import { useEffect, useState } from "react";
import "./App.css";
import { GetBooks } from "../api/GetBooks";
import { Loader } from "./components/Loader/Loader";
import { Form } from "./components/Form/Form";
import { Title } from "./components/Title/Title";
import { BooksList } from "./components/BooksList/BooksList";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("Java Script");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorite, setFavorite] = useState(() => {
    const saved = localStorage.getItem("favoriteBooks");
    return saved ? JSON.parse(saved) : [];
  });
  const [idFavorite, setIdFavorite] = useState(() => {
    const saved = localStorage.getItem("idFavoriteBooks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("favoriteBooks", JSON.stringify(favorite));
      localStorage.setItem("idFavoriteBooks", JSON.stringify(idFavorite));
    }, 1000);
  }, [favorite, idFavorite]);

  useEffect(() => {
    if (!bookName) {
      setBooks([]);
      setLoad(false);
      return;
    }
    setLoad(true);
    GetBooks(bookName)
      .then((res) => {
        if (res.length === 0) {
          setBooks([]);
          setError("No results");
        } else {
          setBooks(res);
          setError("");
        }
        setLoad(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again.");
        setLoad(false);
      });
  }, [bookName]);

  const handleSubmit = (e, preValue) => {
    e.preventDefault();
    if (preValue.trim() === "") {
      setError("Should enter some think");
    }
    setBookName(preValue);
  };

  const handleClickToFavorite = (id, book) => {
    console.log(book);
    setIdFavorite((prev) => {
      if (prev.includes(id)) {
        toast.error("Book was removed from favorite!");
        return prev.filter((i) => i !== id);
      }
      toast.success("Book was added to favorite!");
      return [id, ...prev];
    });
    setFavorite((prev) => {
      if (
        prev.some(
          (b) => (b.cover_edition_key || b.lending_edition_s || b.key) === id,
        )
      ) {
        return prev.filter(
          (b) => (b.cover_edition_key || b.lending_edition_s || b.key) !== id,
        );
      }
      return [book, ...prev];
    });
  };

  return (
    <>
      <Toaster />
      <Title title="Find Your Book" className="title" />
      <Form handleSubmit={handleSubmit} className="form" />
      {favorite.length > 0 && (
        <button
          className="favorite-btn"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? "All Books" : "Favorites"}
        </button>
      )}
      <BooksList
        books={favorite.length > 0 && isFavorite ? favorite : books}
        handleClickToFavorite={handleClickToFavorite}
        idFavorite={idFavorite}
        className="books"
      />
      {load && <Loader />}
      {error && <ErrorMessage message={error} className="error" />}
    </>
  );
}

export default App;
