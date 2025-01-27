import { ProductsType } from 'types/services';
import { useAxios } from './api';

export const useProductsServices = () => {
  const { PRODUCTS_API } = useAxios();

  const productsList = () => {
    return PRODUCTS_API.get<ProductsType[]>('');
  };

  const updateProducts = (products: ProductsType[]) => {
    return PRODUCTS_API.patch<ProductsType[]>('/batch', products);
  };

  return {
    productsList,
    updateProducts,
  };
};
