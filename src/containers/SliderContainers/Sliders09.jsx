import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard08 from '../../components/SliderElements/SliderCard08';

const Sliders09 = () => {
    const SliderCardData = [
        {
            id: '1',
            bgImg: 'images/slider/19.jpg',
            details: 'Future Architecture Is Here'
        },
        {
            id: '2',
            bgImg: 'images/slider/18.jpg',
            details: 'We value your Dream'
        },
        {
            id: '3',
            bgImg: 'images/slider/20.jpg',
            details: 'Make true your Dream with Mrittik'
        },
    ];

    return (
        <div class="theme_slider_8 p-0">
            <div className="swiper swiper_theme_slider_7">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                >
                    {
                        SliderCardData.map(data =>
                            <SwiperSlide>
                                <SliderCard08
                                    key={data.id}
                                    data={data}
                                />
                            </SwiperSlide>)
                    }
                </Swiper>


                {/* <!-- Add Buttons --> */}
                <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>

            </div>
        </div>
    );
};

export default Sliders09;