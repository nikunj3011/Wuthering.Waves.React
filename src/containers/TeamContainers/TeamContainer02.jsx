import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard02 from '../../components/TeamElements/TeamCard02';

const TeamContainer02 = () => {
    const TeamData = [
        {
            id: '1',
            img: 'images/team/1.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '2',
            img: 'images/team/2.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '3',
            img: 'images/team/3.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '4',
            img: 'images/team/4.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '5',
            img: 'images/team/5.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '6',
            img: 'images/team/6.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '7',
            img: 'images/team/7.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '8',
            img: 'images/team/8.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '9',
            img: 'images/team/9.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
    ]
    return (
        <section >
            <div className="container">
                <div className="section-header text-center has_line">
                    <h1 className="text-white">Our Team</h1>
                </div>

                <div className="team_inner">
                    <div className="swiper swiper_team">
                        <Swiper
                            modules={[Navigation, EffectFade, Pagination]}
                            effect="slide"
                            breakpoints={{
                                600: {
                                    width: 600,
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                992: {
                                    width: 992,
                                    slidesPerView: 3,
                                    spaceBetween: 65,
                                },
                            }}
                            autoHeight={true}
                            parallax={true}
                            controller={{
                                inverse: true,
                            }}
                            slideToClickedSlide={true}
                            loop={true}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                        >
                            {
                                TeamData.map(data =>
                                    <SwiperSlide>
                                        <TeamCard02
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
        </section>
    );
};

export default TeamContainer02;