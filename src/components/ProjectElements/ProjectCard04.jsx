import React, { useLayoutEffect, useRef, useState } from "react";
import LazyLoad from 'react-lazyload';

const ProjectCard04 = (props) => {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const monitorWidth = windowSize.current[0];

    // console.log(monitorWidth);


    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    let elHeight = Number(dimensions.height);
    // console.log(typeof elHeight);

    return (
        <div className="thumb">
            <LazyLoad height={monitorWidth <= 600 ? 250 : monitorWidth <= 1550 ? 600 : monitorWidth <= 2000 ? 750 : 680} once>
                <img className="item_image" src={props.img} alt="" />
            </LazyLoad>

            <div className="works-info">
                <div className="label-text">
                    <h6><a href="#">Lake Cabin</a></h6>
                    <h5><a href="/project-details-2">{props.details}</a></h5>
                    <div className="details_link"><a href="/project-details-2"><span className="link_text">View Detailss</span> <span className="link_icon"><span className="line"></span> <span className="circle"><span className="dot"></span></span></span></a></div>
                </div>
            </div>
        </div>

    );
};

export default ProjectCard04;