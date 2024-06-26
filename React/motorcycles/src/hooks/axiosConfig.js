import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7254',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
