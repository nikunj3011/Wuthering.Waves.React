import React from 'react';

const MissionContainer = () => {
    return (
        <section className="mission">
            <div className="container">
                <div className="mission_top_part">
                    <div className="section-header text-center">
                        <h6 className="text-white text-uppercase">Our MISSION</h6>
                        <p className="text-gray-600">Our organizational sprit believes that where design meets passion & love with space, good architecture happens here</p>
                    </div>
                    <div className="has_line"></div>
                    <img src="images/bg/about_bg.jpg" alt="" />
                </div>

                <div className="mission_bottom_part">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 pe-lg-4">
                            <div className="section-header">
                                <h3 className="text-white text-uppercase border-line">ARCHITECTURE IS WHERE WE BELONG</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-4">
                            <div className="mission_content">
                                <p>Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients.</p>
                                <p>Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients.</p>
                                <p>Mrittik Architects is a full-service design firm providing architecture, master planning, urban design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionContainer;