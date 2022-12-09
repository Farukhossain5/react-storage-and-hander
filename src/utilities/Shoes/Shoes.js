import React from 'react';
import { add, multiply } from '../Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>This is shoes Component</h3>
            <p>total: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;