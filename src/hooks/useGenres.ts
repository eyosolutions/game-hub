import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

// Defining a custom state hook
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
