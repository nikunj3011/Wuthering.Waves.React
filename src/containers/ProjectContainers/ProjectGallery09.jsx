import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import PageHeder from '../../components/PageHeder';
import Paragraph from '../../components/Paragraph';
import ProjectCard09 from '../../components/ProjectElements/ProjectCard09';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';

const ProjectGallery09 = () => {
    const ProjectData01 = [
        {
            id: '1',
            img: 'images/portfolio/packery/2.jpg',
            details: 'Sunlight in the Room',
            tag: 'interiors'
        },
        {
            id: '2',
            img: 'images/portfolio/packery/3.jpg',
            details: 'Find your own self invintage lake house',
            tag: 'residences'
        },
        {
            id: '3',
            img: 'images/portfolio/packery/6.jpg',
            details: 'Find your own self invintage lake house',
            tag: 'residences'
        },
        {
            id: '4',
            img: 'images/portfolio/packery/5.jpg',
            details: 'Huge large area Bedroom',
            tag: 'landscape'
        },
        {
            id: '5',
            img: 'images/portfolio/packery/6.jpg',
            details: 'Find your own self invintage lake house',
            tag: 'residences'
        },


    ];


    return (
        <section className="projects packery">
            <SectionGridLines />
            <div className="large_font">
                <SectionHeader title="Gallery" />
            </div>
            <div className="container">
                <div className="section-header text-center has_line">
                    <PageHeder className='text-white' title="Project Gallery" />
                    <div className="section-desc row align-items-center justify-content-center">
                        <div className="col-lg-6 text-end">
                            <Paragraph text="We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion." />
                        </div>
                        <div className="col-lg-6 text-start">
                            <Paragraph text="We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion." />
                        </div>
                    </div>
                </div>

                <div className="swiper swiper_gallery_2">
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        effect="slide"
                        breakpoints={{
                            // 640: {
                            //     width: 640,
                            //     slidesPerView: 1,
                            // },
                            // 768: {
                            //     width: 768,
                            //     slidesPerView: 2,
                            // },
                            // 992: {
                            //     width: 920,
                            //     slidesPerView: 2,
                            // },

                            600: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                    >
                        {
                            ProjectData01.map(data => <SwiperSlide> <ProjectCard09
                                key={data.id}
                                data={data}
                            /></SwiperSlide>)
                        }
                    </Swiper>

                    {/* <!-- Add Buttons --> */}
                    <div className="swiper-button-prev details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                    <div className="swiper-button-next details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                </div>

            </div>
        </section>
    );
};

export default ProjectGallery09;