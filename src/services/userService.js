import api from "./api";

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/users/login", credentials);

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};

// Register a new user (Principal or Teacher only)
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};

// Get all users (Principal only)
export const getUsers = async () => {
  try {
    const response = await api.get("/users/");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};

// Get user by ID (Principal or Teacher only)
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};
