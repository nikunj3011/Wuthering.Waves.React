import React from 'react';
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard02 from '../../components/SliderElements/SliderCard02';

const Sliders02 = () => {
    return (
        <div className="theme_slider_2 p-0">
            <Swiper
                // direction="vertical"
                modules={[Mousewheel, Pagination]}
                className="swiper_theme_slider_2"
                direction={'vertical'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                slidesPerView={1}
                loop={false}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                parallax={true}
                autHeight={true}
                mousewheel={true}
                controller={{
                    inverse: true,
                }}
                slideToClickedSlide={true}
                lazyLoading={true}
                keyboard={{
                    enabled: true,
                }}
            >
                <SwiperSlide>
                    <SliderCard02 bgImg="images/slider/9.jpg" title='As Architects We Love to Add Beauty & Aesthetics To Your Space' />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard02 bgImg="images/slider/10.jpg" title='The goal of architects is to contribute to the built environment' />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard02 bgImg="images/slider/11.jpg" title='Great Idea, Well Plan Can Make Safe Future' />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderCard02 bgImg="images/slider/12.jpg" title='As Architects We Love to Add Beauty & Aesthetics To Your Space' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Sliders02;