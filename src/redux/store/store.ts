import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsSlice";

// store
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

// useSelector type
export type RootState = ReturnType<typeof store.getState>;
// useDispatchType
export type AppDispatch = typeof store.dispatch;

export default store;
