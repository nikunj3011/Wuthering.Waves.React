import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard04 from '../../components/SliderElements/SliderCard04';

const Sliders04 = () => {
    return (
        <div className="theme_slider_4 p-0">
            <div className="swiper swiper_theme_slider_4">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                >
                    <SwiperSlide>
                        <SliderCard04 bgImg02="images/slider/6.jpg" title="The Future Architecture Is Here" slide="A" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard04 bgImg02="images/slider/2.jpg" title="We value your Dream" slide="D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard04 bgImg02="images/slider/4.jpg" title="Make true your Dream with Mrittik" slide="T" />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default Sliders04;