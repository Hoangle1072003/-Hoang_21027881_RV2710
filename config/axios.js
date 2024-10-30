import axios from "axios";
import _ from "lodash";
import { API_BASE_URL } from "@env";

const instance = axios.create({
  baseURL: API_BASE_URL || "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return data;
});

export default instance;
