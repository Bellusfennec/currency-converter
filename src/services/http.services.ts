import axios from "axios";
import config from "../config.json";

const axiosInstance = axios.create({
  baseURL: config.apiEndpoint
});

axiosInstance.interceptors.response.use(
  res => res,
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) console.error("Something was wrong. Try it later");
    return Promise.reject(error);
  }
);

const httpService = {
  patch: axiosInstance.patch,
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
};

export default httpService;
