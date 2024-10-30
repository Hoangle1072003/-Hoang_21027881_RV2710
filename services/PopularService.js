import axios from "../config/axios";

const fetchPopular = async () => {
  try {
    const response = await axios.get("/popular");
    return response;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { fetchPopular };
