import React from "react";
import { Link } from "react-router-dom";
//import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">FashionExpress</Link>
        </li>
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
