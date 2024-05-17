import React from 'react';

const ListProductItem = (props) => {
    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={props.class}>{props.badge}</span>
                    <img className="primary_img" src={props.img} alt="img" />
                </div>
                <div className="product_item_inner">
                    <div className="label_text">
                        <h4 className="product_item_name"><a href="#">Decor Plant</a> <span className={props.oldClass}>{props.price}</span></h4>
                        <div className="rating">
                            <ul>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                            </ul>
                        </div>
                        <div className="cart_button">
                            <a href="#" className="button">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductItem;