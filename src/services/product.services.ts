import axiosService from "./axios";

export const getAllProductApi = async () => {
  const { data } = await axiosService.get<IProduct[]>("/products");
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await axiosService.get<IProduct>(`/products/${id}`);
  return data;
};
