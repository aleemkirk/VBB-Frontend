import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = 'https://vbb.local';

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
  withCredentials: true,
} as AxiosRequestConfig;

export const post = async <T>(
  url: string,
  options = defaultOptions
): Promise<AxiosResponse<T> | undefined> => {
  try {
    return await axios.post(BASE_URL + url, { ...defaultOptions, ...options });
  } catch (error) {
    // logging mech
    console.error('Error posting', { error });
  }
};

export const get = async <T>(
  url: string,
  options = defaultOptions
): Promise<AxiosResponse<T> | undefined> => {
  try {
    return await axios.get(BASE_URL + url, { ...defaultOptions, ...options });
  } catch (error) {
    // logging mech
    console.error('Error axios get request', { error });
  }
};