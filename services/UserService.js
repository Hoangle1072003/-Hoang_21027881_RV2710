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

const getUserById = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    return response;
  } catch (error) {
    console.error("Axios Error:", error);
  }
};

const updateUser = async (id, { password }) => {
  try {
    const userData = { password };
    console.log("User Data being sent:", userData);
    const response = await axios.patch(`/users/${id}`, userData);
    return response;
  } catch (error) {
    console.error("Axios Error:", error);
  }
};

const logout = async () => {
  try {
    const response = await axios.post("/users/logout");
    return response;
  } catch (error) {
    console.error("Axios Error:", error);
  }
};

let removeUser = async (id) => {
  try {
    const response = await axios.delete(`/users/${id}`);
    return response;
  } catch (error) {
    console.error("Axios Error:", error);
  }
};
module.exports = {
  createUser,
  loginUser,
  getUserById,
  updateUser,
  logout,
  removeUser,
};
