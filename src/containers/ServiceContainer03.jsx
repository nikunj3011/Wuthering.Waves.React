import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryImg from '../components/GalleryImg';
import Paragraph from '../components/Paragraph';
import PointOrder from '../components/PointOrder';
import PointOrder02 from '../components/PointOrder02';
import PostFooter from '../components/PostFooter';
import RelatedProjects from '../components/ProjectElements/RelatedProjects';
import WidgetTitle from '../components/WidgetTitle';
import PostHeader from './PostHeader';

const ServiceContainer03 = () => {

    return (
        <main className="wrapper">
            <section className="project-details bg-dark-200">
                <div className="container">
                    <div className="gallery_slider">
                        <div className="swiper swiper_gallery">
                            <Swiper
                                modules={[EffectFade, Navigation]}
                                effect="slide"
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                            >
                                <SwiperSlide>
                                    <GalleryImg img='images/portfolio/details/sl-1.jpg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GalleryImg img='images/portfolio/details/sl-2.jpg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GalleryImg img='images/portfolio/details/sl-3.jpg' />
                                </SwiperSlide>
                            </Swiper>

                            {/* <!-- Add Buttons --> */}
                            <div className="swiper-navigation">
                                <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                                <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="sidebar">
                                <div className="service-information">
                                    <PointOrder02 href='/service-details' li1='Landscape Design' li2='Product Design' li3='Blueprint Design' li4='Urban Design' li5='Interior Design' />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8">
                            <div className="project-details_inner">
                                <div className="post_content">
                                    <PostHeader title='California Mansion Residence' />
                                    <div className="fulltext">
                                        <Paragraph text='Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.' />

                                        <WidgetTitle title='Project Features' />
                                        <Paragraph text='We design with people in mind and use every expertise at our disposal.Our practice connects communities and is committed to the stewardship of place, people, and the environment.' />

                                        <PointOrder li1='The talent at Mrittik runs wide and deep. Across many markets, geographies & typologies.' li2='Our team members are some of the finest professionals in the industry.' li3='Organized to deliver the most specialized service possible and enriched by the depth.' />

                                        <Paragraph text='Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.' />

                                        <Paragraph text='You don’t create unforgettable spaces all over the world with a single design tool. Our expertise in drawing people together is as broad as it is deep. It draws from a variety of disciplines, each one contributing to the bigger picture and sustainable growth. More than 3,000 projects fill our portfolio, but it’s the millions of people who experience them who matter most. We’ve grouped our work into five categories: places, venues, spaces, experiences and events. Click on the images below to learn more below about the impact our projects have on communities.' />

                                        <PostFooter />
                                    </div>

                                    <RelatedProjects />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </main>
    );
};

export default ServiceContainer03;