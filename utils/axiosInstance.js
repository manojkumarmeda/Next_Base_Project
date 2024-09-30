import axios from 'axios';
import { store } from '../store/store'; // Import the store

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Your API base URL
});

// Intercept requests to add authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
