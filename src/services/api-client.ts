import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

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
  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
