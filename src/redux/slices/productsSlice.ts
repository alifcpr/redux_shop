import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../services/product.services";

// handle fetchAllProduct
export const fetchAllProduct = createAsyncThunk("products/fetchAllProduct", async () =>
  getAllProductApi()
);

// product initialState type
interface ProductState {
  productList: IProduct[];
  loading: boolean;
  error: string;
}

// initial state
const initialState = {
  productList: [],
  loading: false,
  error: "",
} satisfies ProductState as ProductState;

// product slice
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state, _) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchAllProduct.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.error = "";
        state.productList = action.payload;
      }
    );
    builder.addCase(fetchAllProduct.rejected, (state, _) => {
      state.loading = false;
      state.error = "There was a problem receiving data, please try again";
    });
  },
});

export default productsSlice.reducer;
