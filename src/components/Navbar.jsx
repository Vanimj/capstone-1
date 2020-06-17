import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  const handleChange=(value)=>{

  props.setInput(value)
  }
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">FashionExpress</Link>
        </li>
      </ul>
      <ul>
      <form>
      <input type="text"  placeholder="Enter Product" onChange ={(e)=>handleChange(e.target.value )}
      />
         </form>
      </ul>
      <ul className="right">
        <li>
          <Link to="/cart">
            <span className="ShoppingCart">
              <i className="fas fa-cart-plus"></i>
              <span className="cartCount">0</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
