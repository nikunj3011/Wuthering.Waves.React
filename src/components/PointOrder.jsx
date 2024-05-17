import React from 'react';

const PointOrder = (props) => {
    return (
        <ul className="point_order">
            <li>{props.li1}</li>
            <li>{props.li2}</li>
            <li>{props.li3}</li>
        </ul>
    );
};

export default PointOrder;