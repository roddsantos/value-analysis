import axios, { AxiosInstance } from 'axios';
import { API, FORM_DATA_HEADER, ORDERS, PRODUCT } from 'utils/consts';

export const useAxios = () => {
  const createInstance = (
    baseURL: string | undefined,
    timeout = 20000
  ): AxiosInstance => {
    const instance = axios.create({
      baseURL,
      timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return instance;
  };

  const PRODUCTS_API = createInstance(API + PRODUCT);
  PRODUCTS_API.defaults.headers.common.Accept = FORM_DATA_HEADER;
  const ORDERS_API = createInstance(API + ORDERS);
  ORDERS_API.defaults.headers.common.Accept = FORM_DATA_HEADER;

  return {
    PRODUCTS_API,
    ORDERS_API,
  };
};
