//  import React, {createContext, useState} from 'react';

// import buckle-fashion from "../assets/buckle-fashion.jpg";
// import floral-sling from "../assets/floral-sling.jpg";
// import sling-bag from "../assets/sling-bag.jpg";
// import knitted-bag from "../assets/knitted-bag.jpg";
// import pink-bag from "../assets/pink-bag.jpg";
// import Red-handbag from "../assets/Red-handbag.jpg";
// import shoulder-bag from "../assets/shoulder-bag.jpg";
// import teal-n-pink from "../assets/teal-n-pink.jpg";
// import woven-sling from "../assets/woven-sling.jpg";
// import yellow-backpack from "../assets/yellow-backpack.jpg";

// export const ProductsContext = createContext();

// const ProductsContextProvider = (props) => {
//     const [products] = useState([
//         {id:1, name: 'handbag1', price: 300, image:buckle-fashion, status: 'hot'},
//         {id:2, name: 'handbag2', price: 200, image:floral-sling, status: 'hot'},
//         {id:3, name: 'handbag3', price: 100, image:sling-bag, status: 'hot'},
//         {id:4, name: 'handbag4', price: 250, image:knitted-bag, status: 'hot'},
//         {id:5, name: 'handbag5', price: 300, image:pink-bag, status: 'hot'},
//         {id:6, name: 'handbag6', price: 450, image:Red-handbag, status: 'hot'},
//         {id:7, name: 'handbag7', price: 470, image:shoulder-bag, status: 'hot'},
//         {id:8, name: 'handbag8', price: 500, image:teal-n-pink, status: 'hot'},
//         {id:9, name: 'handbag9', price: 400, image:woven-sling, status: 'hot'},
//         {id:10, name: 'handbag10', price: 600, image:yellow-backpack, status: 'hot'}
//     ])
//     return(
//         <ProductsContext.Provider value={{products:[...products]}}>
//            {props.children}
//         </ProductsContext.Provider>

//     )
// }

// export default ProductsContextProvider;
