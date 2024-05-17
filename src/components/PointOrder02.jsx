import React from 'react';

const PointOrder02 = (props) => {
    return (
        <ul>
            <li><a href={props.href}>{props.li1}</a></li>
            <li className="active"><a href={props.href}>{props.li2}</a></li>
            <li><a href={props.href}>{props.li3}</a></li>
            <li><a href={props.href}>{props.li4}</a></li>
            <li><a href={props.href}>{props.li5}</a></li>
        </ul>
    );
};

export default PointOrder02;