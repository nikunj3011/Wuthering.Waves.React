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
    var icon = "https://static.dotgg.gg/wuthering-waves/" + data.icon
    var classEcho = data.class.substring(0, data.class.indexOf(' '))
    const imageItems = data.sonata?.map((ech) =>
        {
            if(ech === "Celestial Light")
            {
                return <img src="images/main_images/echoSets/celestial_light.webp" height="30" width="30" alt="Icon Box" title={ech}/>
            }else if(ech === "Freezing Frost")
            {
                return <img src="images/main_images/echoSets/freezing_frost.webp" height="30" width="30" alt="Icon Box" title={ech}/>
            }else if(ech === "Lingering Tunes")
                {
                    return <img src="images/main_images/echoSets/lingering_tunes.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                }else if(ech === "Molten Rift")
                    {
                        return <img src="images/main_images/echoSets/molten_rift.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                    }else if(ech === "Moonlight Clouds")
                        {
                            return <img src="images/main_images/echoSets/moonlight_clouds.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                        }else if(ech === "Sierra Gale")
                            {
                                return <img src="images/main_images/echoSets/sierra_gale.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                            }else if(ech === "Rejuvenating Glow")
                                {
                                    return <img src="images/main_images/echoSets/rejuvenating_glow.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                                }else if(ech === "Sun Sinking Eclipse")
                                    {
                                        return <img src="images/main_images/echoSets/sun_sinking_eclipse.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                                    }else if(ech === "Void Thunder")
                                        {
                                            return <img src="images/main_images/echoSets/void_thunder.webp" height="30" width="30" alt="Icon Box" title={ech}/>
                                        }
        }
      );
      console.log("sda")
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
                    <img src={icon} alt="Icon Box" height="130" width="130" className={classEcho}/>
                    <p className="text-gray-600" style={{paddingTop:3}}><b>Sets: </b>{imageItems}</p>
                </div>
                <div className="col-lg-7 ">
                    <h4 className="text-white">{data.name}</h4>
                    <p className="text-gray-600"><b>Cost: </b>{data.cost} &nbsp; <b>CD: </b>{data.skill.cd}</p>
                    <p className="text-gray-600"><b >Class: </b>{data.class}</p>
                </div>
            </div>
                <p className="text-gray-600" style={{minHeight:120}}>{data.skill.description}</p>
                <p className="text-gray-600"></p>
                {/* <div className="arrow_effect">
                    <a href="/service-details"><span className="crossline1"></span><span className="crossline2"></span></a>
                </div> */}
            </div>
    );
};

export default EchoesCard;