import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  (config) => {
    // TODO: Add auth token or csrf token to header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// TODO: add interceptors to log http requests and responses

export default instance;
