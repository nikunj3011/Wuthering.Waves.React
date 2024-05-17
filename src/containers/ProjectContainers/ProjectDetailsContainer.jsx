import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectDetailsInner from '../../components/ProjectElements/ProjectDetailsInner';
import ProjectDetailsSlider from '../../components/ProjectElements/ProjectDetailsSlider';
import SideBar02 from '../../components/SideBar02';

const ProjectDetailsContainer = () => {
    return (
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
                                <ProjectDetailsSlider img='images/portfolio/details/sl-1.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-2.jpg' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectDetailsSlider img='images/portfolio/details/sl-3.jpg' />
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
                        <SideBar02 />
                    </div>

                    <div className="col-lg-8 col-md-8">
                        <ProjectDetailsInner />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsContainer;