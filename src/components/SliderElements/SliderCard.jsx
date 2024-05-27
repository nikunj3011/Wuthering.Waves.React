import React from 'react';

const SliderCard = ({ data }) => {
    const { bgImg, text } = data;
    return (
        <div>
            <div className="slider" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="slide_content">
                    <div className="slide_content_wrapper mb-0 h-auto bg-dark-500">
                        <div className="slide_content_inner">
                            <h4></h4>
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
            <div className='slide_content_wrapper mb-0 h-auto bg-dark-500 '>
                <p><a href="/project-details" className="text-white">{text}</a></p>
            </div>
        </div>

    );
};

export default SliderCard;