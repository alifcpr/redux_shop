import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  calculateCartsPrice,
  calculateCartsTotalCount,
} from "../../utils/util";

// cart initialState type
interface ICartState {
  carts: ICart[];
  totalCount: number;
  priceAll: number;
}

// cart initialState
const initialState: ICartState = {
  carts: !!localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts")!)
    : [],
  totalCount: !!localStorage.getItem("carts")
    ? calculateCartsTotalCount(JSON.parse(localStorage.getItem("carts")!))
    : 0,
  priceAll: !!localStorage.getItem("carts")
    ? calculateCartsPrice(JSON.parse(localStorage.getItem("carts")!))
    : 0,
};

// cartSlice
const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    // add product to cart
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (
        state.carts.find(
          (product: IProduct) => product.id === action.payload.id
        )
      ) {
        toast.error("This product has already been added to the cart");
        return;
      }
      state.carts.push({ ...action.payload, quantity: 1 });
      toast.success("The product has been added to the cart");
      state.totalCount = calculateCartsTotalCount(state.carts);
      state.priceAll = calculateCartsPrice(state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    // remove product from carts
    removeCart: (state, action: PayloadAction<IProduct>) => {
      const newCarts = state.carts.filter(
        (carts: ICart) => carts.id !== action.payload.id
      );
      state.carts = newCarts;
      localStorage.setItem("carts", JSON.stringify(newCarts));
      state.totalCount = calculateCartsTotalCount(state.carts);
      state.priceAll = calculateCartsPrice(state.carts);
      toast.success("The desired product was removed from the shopping cart");
    },

    // increament product in carts
    increamentProduct: (state, action: PayloadAction<IProduct>) => {
      const cartIndex = state.carts.findIndex(
        (cart: ICart) => cart.id === action.payload.id
      );
      state.carts[cartIndex].quantity++;
      state.totalCount = calculateCartsTotalCount(state.carts);
      state.priceAll = calculateCartsPrice(state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
      toast.success("increament product successfull");
    },
    // decreament product in carts
    decreamentProduct: (state, action: PayloadAction<IProduct>) => {
      const cartIndex = state.carts.findIndex(
        (cart: ICart) => cart.id === action.payload.id
      );
      state.carts[cartIndex].quantity--;
      state.totalCount = calculateCartsTotalCount(state.carts);
      state.priceAll = calculateCartsPrice(state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
      toast.success("decreament product successfull");
    },
    // remove all carts
    clearShoppingCart: (state) => {
      state.carts = [];
      state.priceAll = 0;
      state.totalCount = 0;
      localStorage.removeItem("carts");
    },
  },
});

export const {
  addToCart,
  removeCart,
  increamentProduct,
  decreamentProduct,
  clearShoppingCart,
} = cartSlice.actions;
export default cartSlice.reducer;
