// axios.js

import axios from "axios";

const baseURL = "http://localhost:2000/api/v1/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// You can set up interceptors, headers, or other configurations here

export default axiosInstance;
