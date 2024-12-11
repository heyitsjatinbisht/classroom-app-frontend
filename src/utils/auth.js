import api from "../services/api";

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/users/login", userData);

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurrentUser = async () => {
  try {
    const response = await api.get("/users/current-user");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  await api.post("/users/logout");
  return true;
};
