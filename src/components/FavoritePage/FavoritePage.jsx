import { BooksList } from "../BooksList/BooksList";
import { CountFavorite } from "../CountFavorite/CountFavorite";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { Title } from "../Title/Title";
import "./FavoritePage.css";

export const FavoritePage = () => {
  return (
    <>
      <ThemeButton />
      <Title title="Favorites" className="title" />
      <CountFavorite />
      <BooksList className="books" />
    </>
  );
};
