import axios from "../config/axios";

const fetchCategories = async () => {
  try {
    const response = await axios.get("/category");
    return response;
  } catch (error) {
    console.error(error);
  }
};
module.exports = { fetchCategories };
