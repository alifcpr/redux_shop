import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice";
import settingReducer from "../slices/settingSlice";
import cartReducer from "../slices/cartSlice";
import productDetailReducer from "../slices/productDetailSlice";

// store
const store = configureStore({
  reducer: {
    products: productReducer,
    setting: settingReducer,
    carts: cartReducer,
    productDetail: productDetailReducer,
  },
});

// useSelector type
export type RootState = ReturnType<typeof store.getState>;
// useDispatchType
export type AppDispatch = typeof store.dispatch;

export default store;
