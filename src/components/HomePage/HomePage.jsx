import { Title } from "../Title/Title";
import "./HomePage.css";
import { CountFavorite } from "../CountFavorite/CountFavorite";
import { BooksList } from "../BooksList/BooksList";
import { Form } from "../Form/Form";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const HomePage = () => {
  return (
    <>
      <ThemeButton />
      <Title title="Find Your Book" className="title" />
      <Form className="form" />
      <CountFavorite />
      <BooksList className="books" />
    </>
  );
};
