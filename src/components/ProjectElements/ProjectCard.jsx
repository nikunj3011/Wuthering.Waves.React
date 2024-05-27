import React, { useLayoutEffect, useRef, useState } from "react";
import LazyLoad from 'react-lazyload';

const ProjectCard = ({ data }) => {
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

    const { img, name, tag } = data;

    return (
        <div className="col-lg-3 text-center">
            <div className={`grid-item ${tag} width-10`}>
                <div className="thumb">
                    <LazyLoad height={monitorWidth <= 600 ? 500 : monitorWidth <= 1550 ? 680 : monitorWidth <= 2000 ? 810 : 680} once>
                        <img className="item_image" src={img} alt="" />
                        <h5><a href="/project-details">{name}</a></h5>
                    </LazyLoad>
                    
                    <div className="works-info">
                        <div className="label-text">
                            <h5><a href="/project-details">{name}</a></h5>
                            <div className="details_link"><a href="/project-details"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;