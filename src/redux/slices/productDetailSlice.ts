import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../../services/product.services";

// handle fetch product by id
export const fetchProductById = createAsyncThunk(
  "productDetail/fetchProductById",
  async (id: number) => getProductById(id)
);

// product detail type
interface IProductDetailState {
  loading: boolean;
  product: IProduct;
  error: string;
}

// productDetail initialState
const initialState: IProductDetailState = {
  loading: false,
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  },
  error: "",
};

// productDetail slice
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.loading = false;
      state.error = "There was a problem receiving data, please try again";
    });
  },
});

export default productDetailSlice.reducer;
