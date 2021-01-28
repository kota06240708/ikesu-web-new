import axiso, { AxiosInstance } from 'axios';

const baseDomain = 'https://89-studio.microcms.io';

const baseURL = `${baseDomain}/api/v1`;

// 通常のheader
export const Repository: AxiosInstance = axiso.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': 'd48432a5-6827-4e78-855f-7c2f082e6973'
  }
});
