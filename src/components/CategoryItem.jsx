import React from 'react';

const CategoryItem = (props) => {
    return (
        <li className="category_item">
            <div className="category_item_inner">
                <div className="cat_name"><a href="#">{props.room}</a></div>
                <span className="cat_toggler">
                    <a data-bs-toggle="collapse" href={props.href}>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </span>
            </div>
            <ul id={props.id} className="child_category collapse">
                <li>
                    <div className="cat_name"><a href="#">{props.item1}</a></div>
                </li>
                <li>
                    <div className="cat_name"><a href="#">{props.item2}</a></div>
                </li>
                <li>
                    <div className="cat_name"><a href="#">{props.item3}</a></div>
                </li>
            </ul>
        </li>
    );
};

export default CategoryItem;