import React from 'react';

const SliderCard02 = (props) => {
    return (
        <div className="slider" style={{ backgroundImage: `url(${props.bgImg})` }}>
            <div className="slide_content">
                <div className="slide_content_wrapper mb-0 bg-dark-100">
                    <div className="slide_content_inner">
                        <div className="meta m-0">
                            <div className="category text-olive text-uppercase">Landscape Design</div>
                        </div>
                        <h4><a href="/project-details" className="text-white">{props.title}</a></h4>
                        <div className="details_link">
                            <a href="/project-details">
                                <span className="link_text">View Details</span>
                                <span className="link_icon">
                                    <span className="line"></span>
                                    <span className="circle"></span>
                                    <span className="dot"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderCard02;