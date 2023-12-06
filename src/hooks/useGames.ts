import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface PlatformType {
  id: number;
  name: string;
  slug: string;
}
export interface GameType {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformType }[];
  metacritic: number;
}

interface GamesResponseType {
  count: number;
  results: GameType[];
}

// Defining a custom state hook
const useGames = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // creating a useEffect cleanup function
    const controller = new AbortController();

    apiClient
      .get<GamesResponseType>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
