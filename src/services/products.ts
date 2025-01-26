import { ProductsType } from 'types/products';
import { useAxios } from './api';

export const useProductsServices = () => {
  const { PRODUCTS_API } = useAxios();

  const productsList = () => {
    return PRODUCTS_API.get<ProductsType[]>('');
  };

  return {
    productsList,
  };
};
