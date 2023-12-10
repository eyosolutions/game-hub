// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Defining a custom state hook to get genres from API
// const useGenres = () => useData<Genre>("/genres");

// Getting genre from static file rather than from API
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 1000, // 24hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
