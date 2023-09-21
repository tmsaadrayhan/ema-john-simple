import React from 'react';
import logo from "../images/logo.png";
import "./Header.css"


const header = () => {
    return (
        <div className="header ">
            <div className='d-flex justify-content-center'>
                <img  src={logo} alt=""/>
            </div>
            <nav className='ps-3'>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage"> Orders</a>
            </nav>

        </div>
    );
};

export default header;