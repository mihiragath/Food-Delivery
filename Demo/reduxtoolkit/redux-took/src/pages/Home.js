import React from "react";
import Products from '../component/products';
const Home = () =>{
    return(
        <div>
            <h2 className="heading">Wellcome to store</h2>
            <h3>Products</h3>
            <Products />
        </div>
    )
}
export default Home;