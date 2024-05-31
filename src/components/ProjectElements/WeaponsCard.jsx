import React, { useLayoutEffect, useRef, useState } from "react";
import LazyLoad from 'react-lazyload';

const WeaponsCard = ({ data }) => {
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

    const { img, name, tag, bStyle, description, rarity, type, baseAtk, bonusStat, rarityDes } = data;

    return (
        <div className="col-lg-4 col-6 text-left" style={{padding:10}}>
            {/* <div className={`grid-item ${tag} width-10`}>
                <div className="thumb">
                    <LazyLoad height={monitorWidth <= 600 ? 500 : monitorWidth <= 1550 ? 680 : monitorWidth <= 2000 ? 810 : 680} once>
                        <img className="item_image" src={img} alt="" style={{background: bStyle}} />
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

            <div className="icon_box row">
                <div className="col-lg-5 ">
                    <img src={img} alt="Icon Box" className={rarityDes}/>
                </div>
                <div className="col-lg-7 ">
                    <h4 className="text-white"><a href="/service-details">{name}</a></h4>
                    <p className="text-gray"><b>Rarity: </b>{rarity}  &nbsp; {type}</p>
                </div>
            </div>
            <p className="text-gray-600" style={{minHeight:120}}>{description}</p>
            <p className="text-gray-600"></p>
            <div className="row" style={{backgroundColor:"#1B1917"}}>
                <div className="col-lg-6" style={{paddingTop:10}}>
                    <p className="text-gray-600"><b>ATK (Lv.1): {baseAtk} </b></p>
                </div>
                <div className="col-lg-6" style={{paddingTop:10}}>
                    <p className="text-gray-600" ><b>{bonusStat} </b></p>
                </div>
            </div>
        </div>
        
    );
};

export default WeaponsCard;