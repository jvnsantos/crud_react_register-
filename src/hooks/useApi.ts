import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate", { token });
    return response.data;
  },

  signin: async (email: string, password: string) => {
    const response = await api.post("/auth", { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
