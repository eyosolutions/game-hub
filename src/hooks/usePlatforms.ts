import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Defining a custom state hook to get platforms from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Getting the platforms from static file rather than from API
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 1000, // 24hrs
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
