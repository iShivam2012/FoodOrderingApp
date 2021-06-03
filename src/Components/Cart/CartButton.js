import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../Store/cart-context";

const CartButton = (props) => {
  const cardCtx = useContext(CartContext);
  const noOfItems = cardCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
