import axios from 'axios';

const VBB_API_BASE_URL = process.env.REACT_APP_VBB_API_BASE_URL || 'https://vbb.local';

export const vbbAPIV1 = axios.create({
  baseURL: `${VBB_API_BASE_URL}/api/v1/`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }
});


export const vbbAPIV1NoAuth = axios.create({
  baseURL: `${VBB_API_BASE_URL}/api/v1/`,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  }
});
