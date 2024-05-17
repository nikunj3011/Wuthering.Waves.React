import React from 'react';
import ServiceCard02 from '../components/ServiceCard02';

const ServiceContainer02 = () => {
    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" >
                            <ServiceCard02 img01='images/icon_box/bg-1.jpg' img02="images/icon_box/1.png" title="Urban Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-2.jpg" img02="images/icon_box/2.png" title="Interior Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-3.jpg" img02="images/icon_box/3.png" title="Landscape Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-4.jpg" img02="images/icon_box/4.png" title="Industrial Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-5.jpg" img02="images/icon_box/5.png" title="3D Modeling" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard02 img01="images/icon_box/bg-6.jpg" img02="images/icon_box/6.png" title="Blueprint Design" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ServiceContainer02;