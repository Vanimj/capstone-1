import React, { useContext } from "react";
import Banner from "./Banner";
import data from "../data/data.json";
//import { CartContext } from "../Global/CartContext";
import { CartContext } from "./CartContext";

const Products = (props) => {
  //const dispatch = useContext(CartContext);
  const [cart, setCart] = useContext(CartContext);
  const addtocart = () => {
    const res = { name: props.name, price: props.price };
    setCart((curr) => [...curr, res]);
    //console.log("clicked");
  };
  return (
    <div className="container">
      <Banner />
      <div className="products">
        {data.map((dataDetail, i) => {
          return (
            <div className="product" key={i}>
              {dataDetail.id}

              <div className="product-img">
                <img src={dataDetail.image} alt="handbag1" />
              </div>
              <div className="product-details">
                <div className="product-name">{dataDetail.name}</div>
                <div className="product-price">{dataDetail.price}</div>

                <div className="product-status">{dataDetail.status}</div>

                <button
                  className="add-to-cart"
                  onClick={addtocart}
                  //onClick={() => addtocart(dataDetail.id)}
                  // onClick={() =>
                  //   dispatch({
                  //     type: "ADD_TO_CART",
                  //     id: dataDetail.id,
                  //     dataDetail,
                  //   })
                  // }
                >
                  ADD TO CART
                </button>
              </div>
              {/* {dataDetail.status === "hot" ? (
                <div className="hot">Hot</div>
              ) : (
                ""
              )}
              {dataDetail.status === "new" ? (
                <div className="new">New</div>
              ) : (
                ""
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
