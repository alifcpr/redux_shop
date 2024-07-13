import axiosService from "./axios";

export const getAllProductApi = async () => {
  const { data } = await axiosService.get<IProduct[]>(
    "https://fakestoreapi.com/products"
  );
  return data;
};
