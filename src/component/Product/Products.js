import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {

    const { name, img, seller, price, ratings } = props.product


    // const { handleAddToCart } = props


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'><p className='product-name'>{name}</p>
                <p>price:{price}</p>
                <p><small>seller:{seller}</small></p>
                <p><small>rating:{ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'><p className='cart-field'>Add to cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>

        </div>
    );
};

export default Products;