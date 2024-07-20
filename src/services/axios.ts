import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosService = {
  post: axiosInstance.post,
  get: axiosInstance.get,
  put: axiosInstance.put,
  patch: axiosInstance.patch,
  delete: axiosInstance.delete,
};

export default axiosService;
