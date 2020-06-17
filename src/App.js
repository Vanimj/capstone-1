import React, {useState, useEffect} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart";
import Products from "./components/Products";
import NotFound from "./components/NotFound";

function App() {
  const [input, setInput]=useState("");
  const [cartItems, setCartItems]=useState([])
 
  console.log(cartItems);

  const addtocart = item =>{
    setCartItems([...cartItems, item])
  }
  return (
    <div>
      
        <Navbar setInput={setInput} />
        <Switch>
          <Route exact path="/" render={()=>(
          <Products input={input} addtocart={addtocart}/>
          )} />
          <Route exact path="/cart" render={()=>(
            <Cart cartItems={cartItems} />
          )} />
          <Route component={NotFound} />
        </Switch>
    
      
    </div>
  );
} 

export default App;
