import React from 'react';
import { Link } from "react-router-dom";
import ProductZoomInfo from '../components/ProductZoomInfo';
import ProductZoomBtnGrp from './ProductZoomBtnGrp';

const ProductView = () => {
    return (
        <section clasNames="product_view bg-dark-200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 pe-lg-5">
                        <div className="product_left">
                            <div className="product_zoom">
                                <ProductZoomBtnGrp bgImg1='images/shop/single/1.png' bgImg2='images/shop/single/2.png' bgImg3='images/shop/single/3.png' bgImg4='images/shop/single/4.png' />

                                <div className="product_zoom_container">
                                    <ProductZoomInfo img='images/shop/single/1.png' />
                                    <ProductZoomInfo img='images/shop/single/2.png' />
                                    <ProductZoomInfo img='images/shop/single/3.png' />
                                    <ProductZoomInfo img='images/shop/single/4.png' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ps-lg-0 pe-lg-5">
                        <div className="product_right">
                            <div className="product_info">
                                <div className="product_title"><h2>Green Armchair</h2></div>
                                <div className="product_rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                    <i className="bi bi-star"></i>
                                    <div className="product_rating_details">(35 Customer Reviews)</div>
                                </div>
                            </div>
                            <div className="product_price">
                                <span className="product_item_price"> <del className='d-none'>$15.00</del>  $13.00</span>
                                <span className="product_item_price"></span>
                            </div>
                            <div className="product_description">
                                Ut enim ad minima veniam, quis nostrum exercitationem corporis commosequatur? Quis autem vel eum iure veniam, quis nostrum sequatur? Quis autem vel eum iure...
                            </div>
                            <div className="product_view_bottom">
                                <div className="product_quantity">
                                    <div className="pproduct_quantity_label">Quantity</div>
                                    <div className="product_quantity_inner">
                                        <span className="qty_btn product_quantity_subtract">
                                            <i className="bi bi-dash-lg"></i>
                                        </span>
                                        <input type="text" className="quantity" id="product_quantity_input" placeholder="0" value={1} />
                                        <span className="qty_btn product_quantity_add">
                                            <i className="bi bi-plus-lg"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="wish_button">
                                    <a href="#"><i className="bi bi-heart"></i></a>
                                </div>
                                <div className="compare_button">
                                    <a href="#"><i className="bi bi-bar-chart-line"></i></a>
                                </div>
                            </div>

                            <div className="cart_button d-flex justify-content-start gap-3">

                                <Link to="#" > <button className="button">Add to Cart</button></Link>
                                <Link to="#" ><button className="button">Buy Now</button></Link>
                            </div>

                            <div className="product_view_bottom_credential">
                                <ul className="px-0 mb-0">
                                    <li className="categories"><span>Category:</span> <a href="#">Furniture</a></li>
                                    <li className="sku"><span>SKU:</span> 07</li>
                                    <li className="tags"><span>Tags:</span> <a href="#">Wooden</a> <a href="#">Armchair</a> <a href="#">Sofa</a></li>
                                </ul>
                            </div>
                            <div className="product_social_share">
                                <ul>
                                    <li className="label_text">Share:</li>
                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                    <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductView;