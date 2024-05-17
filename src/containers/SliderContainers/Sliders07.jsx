import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard06 from '../../components/SliderElements/SliderCard06';
import SliderCard07 from '../../components/SliderElements/SliderCard07';

const Sliders07 = () => {
    return (
        <div className="theme_slider_6">
            <div className="swiper swiper_theme_slider_6">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    centeredSlides={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                >
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/1.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/2.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/3.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/4.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/5.jpg' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="swiper_theme_slider_6_body">
                <SliderCard06 title='THE FUTURE ARCHITECTURE IS HERE' />
            </div>

            <div className="swiper swiper_theme_slider_6 second_row">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    loop={true}
                    initialSlide={1}
                    centeredSlides={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                >
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/4.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/5.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/6.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/1.jpg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard07 img='images/slider/grid/2.jpg' />
                    </SwiperSlide>

                </Swiper>
            </div>

            {/* <!-- Add Buttons --> */}
            <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>

        </div >
    );
};

export default Sliders07;