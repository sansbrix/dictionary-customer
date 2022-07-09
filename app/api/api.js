import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const BASE_URI = "https://dictionary.sansbrix.com/public";

const api = axios.create({
    baseURL: `${BASE_URI}/api`,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-Platform': 'web',
        "Accept": "application/json"
      },
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync('access_token');
    if (token) {
        if(config.headers) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;