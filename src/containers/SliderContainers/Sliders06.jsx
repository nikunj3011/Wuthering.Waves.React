import React from 'react';
import SectionGridLines from '../../components/SectionGridLines';
import SliderCard06 from '../../components/SliderElements/SliderCard06';

const Sliders06 = () => {

    return (
        <div className="theme_slider_5 p-0">
            <div className="slider">
                <div className="container">
                    <div className="slide_content">
                        <div className="slide_content_wrapper">
                            <div className="shape">
                                <img src="images/slider/star1.png" alt="" className="star1" />
                                <img src="images/slider/star1-dark.png" alt="" className="star1-dark" />
                                <img src="images/slider/star2.png" alt="" className="star2" />
                                <img src="images/slider/star2-dark.png" alt="" className="star2-dark" />
                                <img src="images/slider/star3.png" alt="" className="star3" />
                                <img src="images/slider/star3-dark.png" alt="" className="star3-dark" />
                            </div>
                            <SliderCard06 title='As Architects We Love to Add Beauty & Aesthetics To Your Space' />
                        </div>
                    </div>
                </div>
                <SectionGridLines />
            </div>
        </div>
    );
};

export default Sliders06;