import { AxiosResponse } from 'axios';
import { Repository } from './Repositorys';

export type TArray<T> = {
  contents: T;
  limit: number;
  offset: number;
  totalCount: number;
};

export type TImage = {
  height: number;
  width: number;
  url: string;
};

export type TAuth = {
  id: string;
  isAuth: boolean;
};

export type TProductBody = {
  description: string;
  image: TImage;
  imagePosition: ['left' | 'right'];
};

export type TProduct = {
  id: string;
  title: string;
  image: TImage;
  role: string;
  type: string[];
  description: string;
  movie: string;
  movieText: string;
  body: TProductBody[];
  client: string;
  category: string;
  field: string;
  member: string;
};

export type TMaster = {
  id: string;
  name: string;
  image: TImage;
  role: string;
  description: string;
  contact: string;
};

export type TMember = {
  id: string;
  name: string;
  image?: TImage;
  role: string;
};

export type TAllData = {
  auth: TAuth;
  products: TArray<TProduct[]>;
  master: TMaster;
  members: TArray<TMember[]>;
};

export default {
  authGet(): Promise<AxiosResponse<TAuth>> {
    return Repository.get('/auth');
  },
  membersGet(): Promise<AxiosResponse<TArray<TMember[]>>> {
    return Repository.get('/members');
  },
  masterGet(): Promise<AxiosResponse<TMaster>> {
    return Repository.get('/master');
  },
  productsGet(): Promise<AxiosResponse<TArray<TProduct[]>>> {
    return Repository.get('/products');
  }
};
