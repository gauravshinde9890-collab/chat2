import axios from "axios";

const api = axios.create({
baseURL: "https://chat-production-cdc6.up.railway.app",
withCredentials: true,
});

export default api;