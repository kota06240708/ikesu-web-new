import { AxiosResponse } from 'axios';
import { Repository } from './Repositorys';

export default {
  authGet(): Promise<AxiosResponse<any>> {
    return Repository.get('/auth');
  },
  membersGet(): Promise<AxiosResponse<any>> {
    return Repository.get('/members');
  },
  masterGet(): Promise<AxiosResponse<any>> {
    return Repository.get('/master');
  },
  productsGet(): Promise<AxiosResponse<any>> {
    return Repository.get('/products');
  }
};
