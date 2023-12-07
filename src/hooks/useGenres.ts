import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Defining a custom state hook
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
