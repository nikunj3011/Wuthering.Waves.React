import React from 'react';

const ServiceCard02 = (props) => {

    return (
        <div className="icon_box type-2">
            <img src={props.img01} alt="img" className="post-bg" />
            <div className="icon_box_inner">
                <img src={props.img02} alt="Icon Box" />
                <h4 className="text-white"><a href="/service-1">{props.title}</a></h4>
                <p className="text-gray-600">{props.text}</p>
                <div className="arrow_effect">
                    <a href="/service-1"><span className="crossline1"></span><span className="crossline2"></span></a>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard02;