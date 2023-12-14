// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

// Defining a custom state hook to get genres from API
// const useGenres = () => useData<Genre>("/genres");

// Getting genre from static file rather than from API
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24hrs
    initialData: genres,
  });

export default useGenres;
