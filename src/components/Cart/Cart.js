import React from 'react';

const Cart = (props) => {
    const cart= props.cart
    //const total= cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i= 0; i<cart.length; i++){
        const product= cart[i];
        total = total + product.price;
    }
    let shipping =0;
    if(total> 35) {
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }

    const tax= (total/10).toFixed(2);
    const totalTaxShipping= (total+Number(tax)+shipping).toFixed(2);

    return (
        <div>
            <h3>This is cart</h3>
            <p>Order Summary: {cart.length}</p>
            <p><small>Product price: {total.toFixed(2)}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax+VAT: {tax}</small></p>
            <p>Total Price: {totalTaxShipping}</p>
        </div>
    );
};

export default Cart;