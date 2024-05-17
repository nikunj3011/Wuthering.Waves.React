import React from 'react';

const SliderCard = ({ data }) => {
    const { bgImg } = data;
    return (
        <div className="slider" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="slide_content">
                <div className="slide_content_wrapper mb-0 h-auto bg-dark-100">
                    <div className="slide_content_inner">
                        <div className="meta m-0">
                            <div className="category text-olive text-uppercase">Condominium</div>
                        </div>
                        <h4><a href="/project-details" className="text-white">California young menz club in the city center</a></h4>
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

export default SliderCard;