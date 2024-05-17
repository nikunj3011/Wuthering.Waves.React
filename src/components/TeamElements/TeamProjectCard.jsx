import React from 'react';
import LazyLoad from 'react-lazyload';

const TeamProjectCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="project">
                <a href="/project-details">
                    <LazyLoad height={800} offset={100} once>
                        <img src={props.img} alt="img" />
                    </LazyLoad>
                </a>
            </div>
        </div>

    );
};

export default TeamProjectCard;