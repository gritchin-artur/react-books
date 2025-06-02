import { useContext } from "react";
import BookContext from "../context/BookContext";

const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};

export default useBookContext;
