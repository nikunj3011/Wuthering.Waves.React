import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../../components/SliderElements/SliderCard';

const Sliders = () => {
    const SliderCardData = [
        {
            id: '1',
            bgImg: 'images/slider/14.jpg',
        },
        {
            id: '2',
            bgImg: 'images/slider/5.jpg',
        },
        {
            id: '3',
            bgImg: 'images/slider/8.jpg',
        },
    ];

    return (
        <div className="theme_slider bg-black">
            <div className="container">
                <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">
                    <Swiper
                        modules={[Pagination, EffectFade, Navigation]}
                        effect="slide"
                        slidesPerView={1}
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
                        {
                            SliderCardData.map(data =>
                                <SwiperSlide>
                                    <SliderCard
                                        key={data.id}
                                        data={data}
                                    />
                                </SwiperSlide>)
                        }

                    </Swiper>

                    {/* <!-- Add Buttons --> */}
                    <div className="swiper-navigation">
                        <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                        <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sliders;