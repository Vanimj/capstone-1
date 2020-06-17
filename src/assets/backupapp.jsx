import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart";
//import CartContextProvider from "./Global/CartContext";
import { CartProvider } from "./components/CartContext";
import Products from "./components/Products";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      {/* <CartContextProvider>  */}
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </CartProvider>
      {/* </CartContextProvider> */}
    </div>
  );
}

export default App;
