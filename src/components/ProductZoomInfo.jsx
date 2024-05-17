import React from 'react';

const ProductZoomInfo = (props) => {
    return (
        <div className="product_zoom_info">
            <div className="product_image_zoom">
                <img src={props.img} alt="img" />
            </div>
        </div>


    );
};

export default ProductZoomInfo;