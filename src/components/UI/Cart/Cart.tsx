import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./Cart.module.scss";
import sneakersImg from "../../../assets/image-product-1-thumbnail.jpg";
import CartContext from "../../../context/CartContext";

const Cart: React.FC = () => {
  const context = useContext(CartContext);
  return (
    <div className={classes["cart-container"]}>
      <h4>Cart</h4>
      {context.totalAmount !== 0 ? (
        <div className={classes["cart-sub-container"]}>
          <div className={classes["cart-item"]}>
            <img src={sneakersImg} className={classes["cart-img"]} />
            <div>
              <h4>Fall Limited Edition Sneakers</h4>
              <h4>
                $125.00 x {context.totalAmount}{" "}
                <strong>{`$${(125 * context.totalAmount).toFixed(2)}`}</strong>
              </h4>
            </div>
            <DeleteIcon
              onClick={context.resetCart}
              className={classes["delete-icon"]}
            />
          </div>
          <button onClick={context.resetCart}>Checkout</button>
        </div>
      ) : (
        <div className={classes["cart-empty"]}>
          <h3>Your cart is empty.</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
