import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
});

export const getUsers = async () => {
  try {
    const res = await API.get("/users");
    return res.data;
  } catch (err) {
    console.error("Error fetching users:", err.message);
    throw err;
  }
};

export const createUser = async (userData) => {
  try {
    const res = await API.post("/users", userData);
    return res.data;
  } catch (err) {
    console.error("Error creating user:", err.message);
    throw err;
  }
};

export default API;
