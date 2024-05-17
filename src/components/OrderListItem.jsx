import React, { createContext } from 'react';

export const TotalContext = createContext();

const OrderListItem = ({ product }) => {
    const { name, price } = product;

    return (
        <li>
            <span className="text">{name} x 1</span> <span className="value">${price}</span>
        </li>
    );
};

export default OrderListItem;