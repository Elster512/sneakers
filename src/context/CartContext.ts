import React from "react";

interface ICartContext {
  totalAmount: number;
  addItem: () => void;
  removeItem: () => void;
  resetCart: () => void;
}

const CartContext = React.createContext<ICartContext>({
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  resetCart: () => {},
});

export default CartContext;
