import axiso, { AxiosInstance } from 'axios';

const baseDomain = 'https://89-studio.microcms.io';

const baseURL = `${baseDomain}/api/v1`;

// 通常のheader
export const Repository: AxiosInstance = axiso.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.API_KEY
  }
});
