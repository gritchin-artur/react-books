import { useEffect, useState } from "react";
import "./Form.css";
import { GetBooks } from "../../api/GetBooks";
import useBookContext from "../../hooks/useBookContext";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const Form = ({ className }) => {
  const { setBooks } = useBookContext();

  const [bookName, setBookName] = useState("Java Script");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [preValue, setPreValue] = useState("");

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
  }, [bookName, setBooks]);

  const handleSubmit = (e, preValue) => {
    e.preventDefault();
    if (preValue.trim() === "") {
      setError("Should enter some think");
    }
    setBookName(preValue);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, preValue)} className={className}>
        <input
          type="text"
          placeholder="Enter book name ..."
          className={`${className}-input`}
          value={preValue}
          onChange={(e) => setPreValue(e.target.value)}
        />
        <button type="submit" className={`${className}-button`}>
          Search
        </button>
      </form>
      {load && <Loader />}
      {error && <ErrorMessage message={error} className="error" />}
    </>
  );
};
