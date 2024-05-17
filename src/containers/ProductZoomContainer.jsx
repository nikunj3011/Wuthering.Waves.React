import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import ProductZoomInfo from '../components/ProductZoomInfo';
import ProductZoomBtnGrp from './ProductZoomBtnGrp';

const ProductZoomContainer = () => {
    return (
        <div className="product_zoom">
            <ProductZoomBtnGrp bgImg1='images/shop/single/1.png' bgImg2='images/shop/single/2.png' bgImg3='images/shop/single/3.png' bgImg4='images/shop/single/4.png' />

            <div className="product_zoom_container">
                <ProductZoomInfo img='images/shop/single/1.png' />
                <ProductZoomInfo img='images/shop/single/2.png' />
                <ProductZoomInfo img='images/shop/single/3.png' />
                <ProductZoomInfo img='images/shop/single/4.png' />

            </div>
        </div>

    );
};

export default ProductZoomContainer;
