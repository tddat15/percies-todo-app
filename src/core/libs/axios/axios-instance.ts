import axios from 'axios';
import { onRefreshToken } from '../../../features/uam/helper';
import { addCookieToken, getAccessToken } from '../../../utils/sesstion.ts';

export type Callback<T> = (arg?: T) => T;
export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    const configure = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return { ...config, ...configure };
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const newToken = await onRefreshToken();
      addCookieToken(newToken);
    }

    return Promise.reject(error);
  },
);
