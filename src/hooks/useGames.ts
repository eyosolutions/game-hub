import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface PlatformType {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformType }[];
  metacritic: number;
}

// Defining a custom state hook for games endpoint
const useGames = () => useData<Game>("/games");

export default useGames;
