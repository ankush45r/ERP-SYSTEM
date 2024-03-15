import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import productContext from "./context";
import './navbar.css'
const Navbar = () => {
    const a = useContext(productContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor: "lightblue"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h4>ERP System</h4></a>
                    
                    <div  id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item color">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                {/* <Link className="nav-li
                                nk active" ria-current="page" to="/home">Home</Link> */}
                                <Link className="nav-link active" ria-current="page" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item color">
                                <Link className="nav-link" ria-current="page" to="/products">Products</Link>
                            </li>
                            <li className="nav-item color">
                                <Link className="nav-link" ria-current="page" to="/addproduct">AddProduct</Link>
                            </li>
                            <li className="nav-item color">
                            <Link to="/orders" className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;