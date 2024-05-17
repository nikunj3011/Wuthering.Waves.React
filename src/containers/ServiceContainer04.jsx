import React from 'react';
import ServiceCard03 from '../components/ServiceCard03';

const ServiceContainer04 = () => {
    const ServiceData03 = [
        {
            id: '01',
            img01: "images/icon_box/1.png",
            title: "Urban Design",
            text: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: '02',
            img01: "images/icon_box/2.png",
            title: "Interior Design",
            text: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: '03',
            img01: "images/icon_box/3.png",
            title: "Landscape Design",
            text: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: '04',
            img01: "images/icon_box/4.png",
            title: "Industrial Design",
            text: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: '05',
            img01: "images/icon_box/5.png",
            title: "3D Modeling",
            text: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        },
        {
            id: '06',
            img01: "images/icon_box/6.png",
            title: "Blueprint Design",
            text: "Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture."
        }
    ]

    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="row">

                        {
                            ServiceData03.map(data =>
                                <ServiceCard03
                                    key={data.id}
                                    data={data}
                                />)
                        }

                    </div>
                </div>
            </section>

        </main>
    );
};

export default ServiceContainer04;