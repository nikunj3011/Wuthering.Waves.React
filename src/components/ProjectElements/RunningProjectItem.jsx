import React from 'react';

const RunningProjectItem = (props) => {
    return (
        <div className="thumb">
            <img className="item_image" src={props.img} alt="img" />
            <div className="works-info">
                <div className="label-text">
                    <h6><a href="#">{props.name}</a></h6>
                    <h5><a href="/project-details">{props.details}</a></h5>
                </div>
            </div>
        </div>

    );
};

export default RunningProjectItem;