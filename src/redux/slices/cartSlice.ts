import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { calculateCartsTotalCount } from "../../utils/util";

// cart initialState type
interface ICartState {
  carts: ICart[];
  total: number;
}

// cart initialState
const initialState: ICartState = {
  carts: JSON.parse(localStorage.getItem("carts")!) ?? [],
  total: 0,
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
      state.total = calculateCartsTotalCount(state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    // remove product from carts
    removeCart: (state, action: PayloadAction<IProduct>) => {
      const newCarts = state.carts.filter(
        (carts: ICart) => carts.id !== action.payload.id
      );
      state.carts = newCarts;
      localStorage.setItem("carts", JSON.stringify(newCarts));
      state.total = calculateCartsTotalCount(state.carts);
      toast.success("The desired product was removed from the shopping cart");
    },

    // increament product in carts
    increamentProduct: (state, action: PayloadAction<IProduct>) => {
      const cartIndex = state.carts.findIndex(
        (cart: ICart) => cart.id === action.payload.id
      );
      state.carts[cartIndex].quantity++;
      state.total = calculateCartsTotalCount(state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
      toast.success("increament product successfull");
    },
    // decreament product in carts
    decreamentProduct: (state, action: PayloadAction<IProduct>) => {
      const cartIndex = state.carts.findIndex(
        (cart: ICart) => cart.id === action.payload.id
      );
      state.carts[cartIndex].quantity--;
      state.total = calculateCartsTotalCount(state.carts);
      localStorage.setItem("carts", JSON.stringify(state.carts));
      toast.success("decreament product successfull");
    },
  },
});

export const { addToCart, removeCart, increamentProduct, decreamentProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
