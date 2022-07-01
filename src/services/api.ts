import axios from 'axios';

const VBB_API_BASE_URL = process.env.REACT_APP_VBB_API_BASE_URL || 'https://vbb.local';

export const vbbAPIV1 = axios.create({
  baseURL: `${VBB_API_BASE_URL}/api/v1/`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  }
});



vbbAPIV1.interceptors.request.use(
  function(config:any) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);



export const vbbAPIV1NoAuth = axios.create({
  baseURL: `${VBB_API_BASE_URL}/api/v1/`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  }
});
