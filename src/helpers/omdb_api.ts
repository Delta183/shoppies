import { Movie } from "../models/Movie";

const searchMoviesWithQuery = async (
  query: string,
  callback: (results: Movie[], error: Error | null) => void
) => {
  if (query.length === 0) {
    callback([], null);
    return;
  }

  fetch(
    `https://www.omdbapi.com/?apikey=c923b464&s=${encodeURIComponent(
      query
    )}&type=movie`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((searchResponse) => {
      const errorMessage = searchResponse["Error"];
      if (errorMessage !== null && errorMessage !== undefined) {
        const error = new Error(errorMessage);
        callback([], error);
      } else {
        const searchResponseResults: Movie[] = searchResponse["Search"];
        if (Array.isArray(searchResponseResults)) {
          callback(searchResponseResults, null);
        } else {
          callback([], null);
        }
      }
    })
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
      callback([], error);
    });
};

export default searchMoviesWithQuery;
