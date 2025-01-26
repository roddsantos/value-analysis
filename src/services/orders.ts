import { OrderDataType, OrderType } from 'types/services';
import { useAxios } from './api';

export const useOrdersServices = () => {
  const { ORDERS_API } = useAxios();

  const getLatestOrder = () => {
    return ORDERS_API.get<OrderType | null>('/latest').then((res) => res.data);
  };

  const createOrder = (data: OrderDataType) => {
    return ORDERS_API.post<OrderType>('', data).then((res) => res.data);
  };

  return {
    createOrder,
    getLatestOrder,
  };
};
