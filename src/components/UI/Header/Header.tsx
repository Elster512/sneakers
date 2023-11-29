import React, { useCallback, useContext, useState } from "react";

import MenuIcon from "../../../assets/icon-menu.svg";
import Logo from "../../../assets/logo.svg";
import CartIcon from "../../../assets/icon-cart.svg";
import Avatar from "../../../assets/image-avatar.png";
import classes from "./Header.module.scss";

import SnackBar from "../SnackBar/snack-bar";
import Cart from "../Cart/Cart";
import { Badge } from "@mui/material";
import CartContext from "../../../context/CartContext";

const Header: React.FC = () => {
  const context = useContext(CartContext);
  const [snackVisible, setSnackVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const onCloseMenu = useCallback(() => {
    setSnackVisible(false);
  }, []);
  const openCart = useCallback(() => setCartVisible((prev) => !prev), []);
  return (
    <nav className={classes["header"]}>
      <SnackBar isShown={snackVisible} closeSnack={onCloseMenu} />
      <div className={classes["first-container"]}>
        <img
          src={MenuIcon}
          className={classes["menu"]}
          onClick={() => setSnackVisible(true)}
        />
        <img className={classes["logo"]} src={Logo} />
        <div className={classes["header-links"]}>
          <div>Collections</div>
          <div>Man</div>
          <div>Woman</div>
          <div>About</div>
          <div>Contacts</div>
        </div>
      </div>
      <div className={classes["avatar-cart"]}>
        <div className={classes["sub-container-cart"]}>
          <Badge badgeContent={context.totalAmount}>
            <img
              src={CartIcon}
              className={classes["cart"]}
              onClick={openCart}
            />
          </Badge>
          {cartVisible && <Cart />}
        </div>

        <img src={Avatar} className={classes["avatar"]} />
      </div>
    </nav>
  );
};

export default Header;
