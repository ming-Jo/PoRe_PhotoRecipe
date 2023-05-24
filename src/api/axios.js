/* eslint-disable consistent-return */
import axios from 'axios';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const imgInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const tokenInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

tokenInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const configData = config;
    if (!configData.headers?.Authorization) {
      configData.headers = {
        ...configData.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return configData;
  },
  (error) => {
    if (error) {
      console.log(error.message);
      return Promise.reject(error);
    }
  },
);

tokenInstance.interceptors.response.use(
  (res) => {
    if (!res.status) {
      throw new Error('Response status is not 200');
    }
    return res.data;
  },
  (error) => {
    if (error) {
      console.log(error.message);
      return Promise.reject(error);
    }
  },
);
