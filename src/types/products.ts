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
