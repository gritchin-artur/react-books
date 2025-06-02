import "./App.css";
import { Toaster } from "react-hot-toast";
import BookProvider from "./providers/BookProvider";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritePage } from "./components/FavoritePage/FavoritePage";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route
            path="*"
            element={<ErrorMessage message="Not found" className="error" />}
          />
        </Routes>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;
