import axios from 'axios';
import {Alert} from 'react-native';

export const configureAxios = () => {
  let isAlertShowed = false;

  axios.interceptors.response.use(
    response => response,
    error => {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.log('response', error);
      }
      return Promise.reject(error);
    },
  );
};

configureAxios();
