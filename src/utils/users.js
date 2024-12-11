import api from "../services/api";

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data.data;
};

export const fetchUserById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data.data;
};

export const updateUser = async (userId, updatedData) => {
  const response = await api.put(`/users/${userId}`, updatedData);
  return response.data.data;
};

export const deleteUser = async (userId) => {
  await api.delete(`/users/${userId}`, {});
  return userId;
};
