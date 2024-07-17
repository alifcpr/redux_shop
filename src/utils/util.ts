// calculate all carts quantity
export const calculateCartsTotalCount = (carts: ICart[]): number => {
  return carts.reduce((per, curr) => per + curr.quantity, 0);
};

// calculate all price cart
export const calculateCartsPrice = (carts: ICart[]): number => {
  return carts.reduce((per, curr) => per + curr.price, 0);
};
