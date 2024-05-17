import React from 'react';

const ProjectCard09 = ({ data }) => {
    const { img, details } = data;

    return (
        <div className='grid-item'>
            <div className="thumb">
                <img className="item_image" src={img} alt="" />
                <div className="works-info">
                    <div className="label-text">
                        <h6><a href="#">Lake Cabin</a></h6>
                        <h5><a href="/project-details">{details}</a></h5>
                        <div className="details_link"><a href="/project-details"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard09;