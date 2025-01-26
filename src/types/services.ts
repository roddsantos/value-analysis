export type ProductsType = {
  id: string;
  code: string;
  name: string;
  description: string;
  quantity: number;
  provider1: number | null;
  provider2: number | null;
  provider3: number | null;
  provider4: number | null;
  selectedProvider: string | null;
};

export type OrderType = {
  id: string;
  code: string;
  description: string;
  type: string;
  justification: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type OrderDataType = Omit<OrderType, 'id' | 'created_at' | 'updated_at'>;
