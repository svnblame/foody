import React from "react";
import Product from "./Product.js";

export default function StoreFront() {
    // Hard-coded Products for now....
    const products = [{
        name: "Cheese",
        description: "200g cheese block",
        image: "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png"
    }, {
        name: "Milk",
        description: "1L of milk",
        image: "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png"
    }]
    return <div className="store-front">
        {/* Duplication for now until we learn how to iterate over the Products */}
        <Product details={products[0]} />
        <Product details={products[1]} />
    </div>;
}
