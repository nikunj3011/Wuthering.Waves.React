import React from 'react';
import Form from './Form';
import Paragraph from './Paragraph';
import SectionGridLines from './SectionGridLines';

const ContactForm = () => {
    return (
        <section className="contact_us bg-dark-200">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="section-header">
                            <h1 className="text-white text-uppercase mb-4">LET’S DISCUSS NEXT PROJECTS</h1>
                            <Paragraph text='The talent at Mrittik runs wide and deep. Across many markets, geographies and typologies, our team members are some of the finest professionals in the industry.. We’ve grouped our work into five categories: places, venues, spaces, experiences and events.' />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <Form />
                    </div>
                </div>
            </div>

            <SectionGridLines />
        </section>
    );
};

export default ContactForm;