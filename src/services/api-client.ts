import axios, { AxiosRequestConfig } from "axios";
import FetchResponse from "../entities/FetchResponse";

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: `${import.meta.env.VITE_REACT_RAWG_APIKEY}`,
//   },
// });

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: `${import.meta.env.VITE_REACT_RAWG_APIKEY}`,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  // Define methods
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  // get details of a movie
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
