import axios from "axios";
import _ from "lodash";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return data;
});

export default instance;
