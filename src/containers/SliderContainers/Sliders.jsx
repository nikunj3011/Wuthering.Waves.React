import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from '../../components/SliderElements/SliderCard';

const Sliders = () => {
    const SliderCardData = [
        {
            id: '1',
            bgImg: 'images/main_images/1_.jpg',
            text: `Wuthering Waves is an action role-playing game set in a futuristic post-apocalyptic open world, where a mysterious catastrophe known as the Lament swept the globe, wiping out most of humanity and leaving it on the verge of extinction. After the calamity, unknown beings and monsters appeared around the world, but humanity soon adapted to the threat and found a way to cope and live with the monsters, slowly rebuilding civilization. The story follows the amnesiac Rover, who has awoken from their deep slumber. On the Rover's journey, they will explore the vast lands and will be greeted by a new world filled with novel sights and new technologies.`
        }
        // {
        //     id: '2',
        //     bgImg: 'images/main_images/2_.jpg',
        //     text: 'aaa'
        // },
        // {
        //     id: '3',
        //     bgImg: 'images/main_images/3_.jpg',
        //     text: 'aaa'
        // }
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