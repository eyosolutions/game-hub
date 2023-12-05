import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: `${import.meta.env.VITE_REACT_RAWG_APIKEY}`,
  },
});
