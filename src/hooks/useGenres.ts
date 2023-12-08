// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Defining a custom state hook to get genres from API
// const useGenres = () => useData<Genre>("/genres");

// Getting genre from static file rather than from API
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
