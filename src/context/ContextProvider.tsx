import React, { useState } from "react";
import CartContext from "./CartContext";

interface IContexProviderProps {
  children: React.ReactNode;
}

const ContextProvider: React.FC<IContexProviderProps> = ({ children }) => {
  const [store, setStore] = useState(0);

  const addItem = () => {
    setStore((prevState) => prevState + 1);
  };
  const removeItem = () => {
    setStore((prevState) => prevState - 1);
  };
  const resetCart = () => {
    setStore(0);
  };
  return (
    <CartContext.Provider
      value={{
        totalAmount: store,
        addItem,
        removeItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
