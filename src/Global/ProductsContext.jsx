// import React, { createContext, useState } from "react";

// //import buckle-fashion from "../assets/buckle-fashion.jpg";
// // import floral-sling from "../assets/floral-sling.jpg";
// // import sling-bag from "../assets/sling-bag.jpg";
// // import knitted-bag from "../assets/knitted-bag.jpg";
// // import pink-bag from "../assets/pink-bag.jpg";
// // import Red-handbag from "../assets/Red-handbag.jpg";
// // import shoulder-bag from "../assets/shoulder-bag.jpg";
// // import teal-n-pink from "../assets/teal-n-pink.jpg";
// // import woven-sling from "../assets/woven-sling.jpg";
// // import yellow-backpack from "../assets/yellow-backpack.jpg";

// export const ProductsContext = createContext();

// const ProductsContextProvider = (props) => {
//   const [products] = useState([
//     {
//       id: 1,
//       name: "handbag1",
//       price: 300,
//       image: "images/buckle-fashion.jpg",
//       status: "hot",
//     },
//     {
//       id: 2,
//       name: "handbag2",
//       price: 200,
//       image: "images/floral-sling.jpg",
//       status: "new",
//     },
//     {
//       id: 3,
//       name: "handbag3",
//       price: 100,
//       image: "images/sling-bag.jpg",
//       status: "hot",
//     },
//     {
//       id: 4,
//       name: "handbag4",
//       price: 250,
//       image: "images/knitted-bag.jpg",
//       status: "hot",
//     },
//     {
//       id: 5,
//       name: "handbag5",
//       price: 300,
//       image: "images/pink-bag.jpg",
//       status: "hot",
//     },
//     {
//       id: 6,
//       name: "handbag6",
//       price: 450,
//       image: "images/Red-handbag.jpg",
//       status: "hot",
//     },
//     {
//       id: 7,
//       name: "handbag7",
//       price: 470,
//       image: "images/shoulder-bag.jpg",
//       status: "hot",
//     },
//     {
//       id: 8,
//       name: "handbag8",
//       price: 500,
//       image: "images/teal-n-pink.jpg",
//       status: "hot",
//     },
//     {
//       id: 9,
//       name: "handbag9",
//       price: 400,
//       image: "images/woven-sling.jpg",
//       status: "hot",
//     },
//     {
//       id: 10,
//       name: "handbag10",
//       price: 600,
//       image: "images/yellow-backpack.jpg",
//       status: "hot",
//     },
//   ]);
//   return (
//     <ProductsContext.Provider value={{ products: [...products] }}>
//       {props.children}
//     </ProductsContext.Provider>
//   );
// };

// export default ProductsContextProvider;
