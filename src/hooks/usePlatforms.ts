import useData from "./useData";
import platform from "../data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Defining a custom state hook to get platforms from API
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// Getting the platforms from static file rather than from API
const usePlatforms = () => ({ data: platform, isLoading: false, error: null });

export default usePlatforms;
