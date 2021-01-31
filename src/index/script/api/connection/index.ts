import Repositorys, { TAllData } from '../index';

export const getAllData: () => Promise<TAllData> = async () => {
  const result: TAllData = {
    auth: null,
    products: null,
    master: null,
    members: null
  };

  const getAuth = async () => {
    const { data } = await Repositorys.authGet();

    result.auth = data;
  };

  const getProducts = async () => {
    const { data } = await Repositorys.productsGet();

    result.products = data;
  };

  const getMaster = async () => {
    const { data } = await Repositorys.masterGet();

    result.master = data;
  };

  const getMember = async () => {
    const { data } = await Repositorys.membersGet();

    result.members = data;
  };

  await Promise.all([getAuth(), getProducts(), getMaster(), getMember()]);

  return result;
};
