import axios from "axios";

const API_URL = "http://localhost:5000/api"; // backend URL

// Signup API call
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Signin API call
export const signin = async (credentials) => {
  const response = await axios.post(`${API_URL}/signin`, credentials);
  return response.data;
};
