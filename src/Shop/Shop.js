import React, { useState } from 'react';
import fakeData from '../fakeData';
import "./Shop.css"
import Product from './../components/Product/Product';
import Cart from '../components/Cart/Cart';

const Shop = () => {
    const data= fakeData;
    const first10= data.slice(0,10);
    const [products, setProducts]= useState(first10);
    console.log(first10);
    const [cart, setCart]= useState([]);

    const handleAddProduct = (product) => {
        const newCart= [...cart, product]
        setCart(newCart);
    }
    console.log(products);
    return (
        <div className='shop_container'>
            <div className='product_container'>
                {
                    products.map(pd => 
                    <Product product={pd} handleAddProduct= {handleAddProduct}></Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart= {cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;