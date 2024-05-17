import React from 'react';

const ListProductItem = ({productItem, handleAddToCart}) => {
    const { img, name, badge, newClass, oldClass, price, oldPrice } = productItem;

    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={newClass}>{badge}</span>
                    <img className="primary_img" src={img} alt="img" />
                </div>
                <div className="product_item_inner">
                    <div className="label_text">
                    <h4 className="product_item_name"><a href="#">{name}</a> <span className="product_item_price"> <del className={oldClass}>{oldPrice}</del> {price}</span></h4>
                        <div className="rating">
                            <ul>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                                <li><i className="bi bi-star-fill"></i></li>
                            </ul>
                        </div>
                        <div onClick={() => handleAddToCart(productItem)} className="cart_button">
                            <a href="#" className="button">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListProductItem;