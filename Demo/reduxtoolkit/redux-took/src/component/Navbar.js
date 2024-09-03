import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Navbar = () =>{
    const item = useSelector((state)=>state.cart)
    return(
        <div   style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <span className="logo">Redux Store</span>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/Cart">Cart</Link>
                <span className="cartCount">cart item:{item.length}</span>
            </div>
        </div>
    )
}
export default Navbar;