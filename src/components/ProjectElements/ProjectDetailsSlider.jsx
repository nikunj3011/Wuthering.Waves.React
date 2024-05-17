import React from 'react';

const ProjectDetailsSlider = (props) => {
    return (
        <div className="swiper-slide">
            <div className="gallery-image">
                <img src={props.img} alt="img" />
            </div>
        </div>
    );
};

export default ProjectDetailsSlider;