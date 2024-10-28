import axios from "../config/axios";

const createUser = async ({ email, password, name }) => {
  try {
    const userData = { email, password, name };
    console.log("User Data being sent:", userData);
    const response = await axios.post("/users", userData);
    return response;
  } catch (error) {
    console.error("Axios Error:", error);
  }
};
const loginUser = async ({ email, password }) => {
  try {
    const userData = { email, password };
    console.log("User Data being sent:", userData);
    const response = await axios.post("/users/login", userData);
    return response;
  } catch (error) {
    console.error("Axios Error:", error);
  }
};

module.exports = { createUser, loginUser };
