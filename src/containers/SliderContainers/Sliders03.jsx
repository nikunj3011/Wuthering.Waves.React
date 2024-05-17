import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard03 from '../../components/SliderElements/SliderCard03';

const Sliders03 = () => {
    return (
        <div className="theme_slider_3 p-0">
            <div className="swiper swiper_theme_slider_3">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                >
                    <SwiperSlide>
                        {/* <SliderCard03 bgImg="images/slider/15.jpg" title="The Future Architecture Is Here" /> */}
                        <SliderCard03 bgImg="images/slider/2.jpg" title="The Future Architecture Is Here" />
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <SliderCard03 bgImg="images/slider/16.jpg" title="We value your Dream" /> */}
                        <SliderCard03 bgImg="images/slider/3.jpg" title="We value your Dream" />
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <SliderCard03 bgImg="images/slider/17.jpg" title="Make true your Dream with Mrittik" /> */}
                        <SliderCard03 bgImg="images/slider/5.jpg" title="Make true your Dream with Mrittik" />
                    </SwiperSlide>
                </Swiper>

                {/* <!-- Add Buttons --> */}
                <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            </div>

            <div className="rotate-logo d-none d-md-block">
                <span className="rotate-bg"><img src="images/slider/rotate-logo.png" alt="spinlogo" /></span>
                <span className="rotate-text"><img src="images/slider/rotate-logo-text.png" alt="spinlogo" /></span>
            </div>
        </div>
    );
};

export default Sliders03;