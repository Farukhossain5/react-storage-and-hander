import React from 'react';
import { addToDb } from '../../utilities/facedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = () => {
        addToDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>{id}</small></p>
            <button onClick={()=>addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;