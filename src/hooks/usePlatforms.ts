import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
// import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// Defining a custom state hook to get platforms from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Getting the platforms from static file rather than from API
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: platforms,
  });

export default usePlatforms;
