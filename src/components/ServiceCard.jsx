import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className="icon_box">
            <h6>{props.number}</h6>
            <img src={props.imgDark} alt="Icon Box" className="dark" />
            <img src={props.imgLight} alt="Icon Box" className="light" />
            <h4 className="text-white"><a href="/service-details">{props.title}</a></h4>
            <p className="text-gray-600">{props.text}</p>
            <div className="arrow_effect">
                <a href="/service-details"><span className="crossline1"></span><span className="crossline2"></span></a>
            </div>
        </div>

    );
};

export default ServiceCard;