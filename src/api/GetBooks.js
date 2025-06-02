import axios from "axios";

axios.defaults.baseURL = "https://openlibrary.org";

export async function GetBooks(bookName) {
  const response = await axios.get(
    `/search.json?title=${encodeURIComponent(bookName)}&limit=20`,
  );
  return response.data.docs;
}
