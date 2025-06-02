import useBookContext from "../../hooks/useBookContext";
import "./CountFavorite.css";
import { ButtonBack } from "../ButtonBack/ButtonBack";
import { useLocation } from "react-router-dom";

export const CountFavorite = () => {
  const { idFavorite } = useBookContext();
  const location = useLocation();

  const countFav = idFavorite.favoriteBooks.length;
  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <div className="count-favorite">
      <h3 className={"clickable"}>
        {countFav > 0
          ? `You have ${countFav} favorite books`
          : "You don't have favorite books"}
      </h3>
      {(countFav > 0 || isFavoritesPage) && (
        <ButtonBack
          path={isFavoritesPage ? "/" : "favorites"}
          text={isFavoritesPage ? "To home" : "To favorites"}
        />
      )}
    </div>
  );
};
