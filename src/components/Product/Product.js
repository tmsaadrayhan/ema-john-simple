import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock}= props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='productName'>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only{stock} left in stock - Order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)}className='mainButton'><FontAwesomeIcon key={props.key} icon={faCartShopping} />Add to card</button>
            </div>
         
        </div>
    );
};

export default Product;