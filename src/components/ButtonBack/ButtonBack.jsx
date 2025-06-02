import { useNavigate } from "react-router-dom";
import "./ButtonBack.css";

export const ButtonBack = ({ path, text }) => {
  const navigate = useNavigate();
  return (
    <button className="btn-to-home" onClick={() => navigate(path)}>
      {text}
    </button>
  );
};
