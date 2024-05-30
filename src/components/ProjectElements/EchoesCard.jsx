import React, { useLayoutEffect, useRef, useState } from "react";
import LazyLoad from 'react-lazyload';

const EchoesCard = ({ key, data }) => {
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

    const { img, name, tag, description, cooldown, id, bStyle, classEcho, cost, echoSets } = data;
    const imageItems = echoSets?.map((data) =>
        <img src={data.img} height="30" width="30" alt="Icon Box" title={data.name}/>
      );
    return (
        <div className="col-lg-4 col-6 text-left">
            {/* <div className={`grid-item ${tag} width-10`}>
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
            </div> */}
            {/* <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." /> */}


            <div className="icon_box row">
                <div className="col-lg-5 ">
                    <img src={img} alt="Icon Box" height="130" width="130" className={classEcho}/>
                    <p className="text-gray-600" style={{paddingTop:3}}><b>Sets: </b>{imageItems}</p>
                </div>
                <div className="col-lg-7 ">
                    <h4 className="text-white"><a href="/service-details">{name}</a></h4>
                    <p className="text-gray-600"><b>Cost: </b>{cost} &nbsp; <b>CD: </b>{cooldown}</p>
                    <p className="text-gray-600"><b >Class: </b>{classEcho}</p>
                </div>
            </div>
                <p className="text-gray-600" style={{minHeight:120}}>{description}</p>
                <p className="text-gray-600"></p>
                {/* <div className="arrow_effect">
                    <a href="/service-details"><span className="crossline1"></span><span className="crossline2"></span></a>
                </div> */}
            </div>
    );
};

export default EchoesCard;