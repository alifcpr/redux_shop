import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice";
import settingReducer from "../slices/settingSlice";
import cartReducer from "../slices/cartSlice";

// store
const store = configureStore({
  reducer: {
    products: productReducer,
    setting: settingReducer,
    carts: cartReducer,
  },
});

// useSelector type
export type RootState = ReturnType<typeof store.getState>;
// useDispatchType
export type AppDispatch = typeof store.dispatch;

export default store;
