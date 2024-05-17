import React from 'react';

const ProductItem = (props) => {
    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={props.class}>{props.badge}</span>
                    <img className="primary_img" src={props.img} alt="img" />
                    <div className="cart_button">
                        <a href="#" className="button">
                            Add to Cart
                        </a>
                    </div>
                </div>
                <div className="product_item_inner">
                    <div className="label_text">
                        <h4 className="product_item_name"><a href="#">{props.name}</a>
                            <span className="product_item_price"> <del className={props.oldClass}>{props.oldPrice}</del> {props.price}</span>
                            <span className="product_item_price"></span></h4>
                        <div className="product_category"><a href="#">{props.category}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;