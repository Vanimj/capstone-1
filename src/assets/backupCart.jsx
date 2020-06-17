import React, { useContext } from "react";
import { CartContext } from "./CartContext";
//import { CartContext } from "../Global/CartContext";
// import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="container">
      <div className="cartContainer" style={{ marginTop: "100px" }}>
        <h2> My Shopping cart!</h2>
        <div>
          <p>ITEMS IN CART : {cart.length}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
        {/* <Link to="/"></Link> */}
      </div>
    </div>
  );
};
export default Cart;
