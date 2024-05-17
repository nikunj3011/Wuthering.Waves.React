import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionGridLines from '../components/SectionGridLines';
import TestimonialSlide from '../components/TestimonialSlide';

const Testimonials = () => {

    return (
        <section className="testimonial box_padding pb-0">
            <SectionGridLines />
            <div className="has_line_lg"></div>

            <div className="testimonial_inner bg-black">
                <div className="swiper swiper_testimonial">

                    <Swiper
                        modules={[Pagination]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            speed: 5000
                        }}
                        slidesPerView={1.5}
                        loop={true}
                        spaceBetween={150}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                    >
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialSlide />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;