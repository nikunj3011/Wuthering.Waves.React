import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../components/ProductItem';

const RelatedProducts = () => {
    return (
        <section className="related_products bg-dark-200">
            <div className="container">
                <h4 className="widget-title">Related Items <span className="title-line"></span></h4>
                <div className="product_view_grid type_1">
                    <Swiper
                        className='swiper_related_products'
                        modules={[Pagination, Navigation]}
                        effect="slide"
                        slidesPerView={3}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                    >
                        <SwiperSlide>
                            <ProductItem oldclassName='d-none' img='images/shop/products/8-1.png' name='Alarm Clock' price='$15.00' category='Furniture' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/10-1.png' name='White Armchair' price='$19.00' category='Furniture' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/11-1.png' name='Teal Rug' price='$19.00' category='Furniture' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem oldclassName='d-none' img='images/shop/products/7-1.png' name='Center Table' price='$15.00' category='Furniture' />
                        </SwiperSlide>
                    </Swiper>
                    {/* <!-- Add Pagination --> */}
                    <div className="swiper-pagination"></div>

                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;