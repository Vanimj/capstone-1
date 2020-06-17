import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import data from "../data/data.json";


const Products = (props) => {

  const [localData, setLocalData] = useState(data)
useEffect(() => {
    
    let sortIt = data.filter(el =>el.name.includes(props.input) )
    setLocalData(sortIt)
   
}, [props.input])
   
  return (
    <div className="container">
      <Banner />
      <div className="products">
        {localData.map((dataDetail, i) => {
          return (
            <div className="product" key={i}>
              {dataDetail.id}

              <div className="product-img">
                <img src={dataDetail.image} alt="handbag1" />
              </div>
              <div className="product-details">
                <div className="product-name">{dataDetail.name}</div>
                <div className="product-price">{dataDetail.price}</div>

                <div className="product-qty">Available{dataDetail.qty}</div>

                <button
                  className="add-to-cart"
                  onClick={()=>props.addtocart(dataDetail)}
                  
                >
                  ADD TO CART
                </button>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
