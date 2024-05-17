import React from 'react';

const ProductItem = ({productItem, handleAddToCart}) => {
    const { id, img, name, badge, newClass, oldClass, price, oldPrice, categoryName } = productItem;

    return (
        <div className="product_item">
            <div className="product_thumb">
                <div className="product_imagebox">
                    <span className={newClass}>{badge}</span>
                    <img className="primary_img" src={img} alt="img" />
                    <div onClick={() => handleAddToCart(productItem)} className="cart_button">
                        <a className="button">
                            Add to Cart
                        </a>
                    </div>
                </div>
                <div className="product_item_inner">
                    <div className="label_text">
                        {/* <Link to={`/shop-product/${id}`}> */}
                            <h4 className="product_item_name"><a href="#">{name}</a>
                                <span className="product_item_price"> <del className={oldClass}>{oldPrice}</del> {price}</span>
                                <span className="product_item_price"></span>
                            </h4>
                        {/* </Link> */}
                        <div className="product_category"><a href="#">{categoryName}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;