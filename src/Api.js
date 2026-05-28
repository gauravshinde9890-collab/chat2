src/api.js

import axios from "axios";

export const API_BASE_URL = "https://chat-production-4419.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default api;
