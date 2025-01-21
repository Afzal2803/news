import axios from 'axios';
import { BACKEND_URL } from './config';
 
const axiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`, // Replace with your API base URL
});
// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    // const accessToken = JSON.parse(sessionStorage.getItem('token'));
    // ** If token is present add it to request's Authorization Header
    // if (accessToken) {
    //   if (config.headers) config.headers.token = accessToken;
    // }
    return config;
  },
  error => {
    // Handle request errors here
    console.error('Error From API', error);
    return Promise.reject(error);
  },
);
 
// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Modify the response data here (e.g., parse, transform)
    return response;
  },
  error => {
    // Handle response errors here
    console.error('ERROR IN FETCHING DATA', error);
    return Promise.reject(error);
  },
);
 
export default axiosInstance;