import React from "react";
//import { CartContext } from "./CartContext";
//import { CartContext } from "../Global/CartContext";
// import { Link } from "react-router-dom";
import Banner2 from "./Banner2"

const Cart = (props) => {
  console.log("added to cart", props)
 
 // const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price), 0);

  return (
    <div className="container">
    <Banner2/>
      <div className="cartContainer" style={{ marginTop: "100px" }}>
        <h2> My Shopping cart!</h2>
        <div className="box">
          <p>ITEMS IN CART :{props.cartItems.length} </p>
          
        </div>
        {props.cartItems.map((dataDetail, i) => {
          return (
            <div className="CartItem" key={i}>
              {dataDetail.id}

              <div className="product-img">
                <img src={dataDetail.image} alt="handbag1" />
              </div>
              <div className="Cart-details">
                <div className="Product-name">{dataDetail.name}</div>
                <div className="product-price">{dataDetail.price}</div>

                <div className="product-qty">{dataDetail.qty}</div>

                
              </div>
              
            </div>
          );
        })}
       
      </div>
    </div>
  );
};
export default Cart;
