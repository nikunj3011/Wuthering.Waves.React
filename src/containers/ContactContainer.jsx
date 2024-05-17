import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const ContactContainer = () => {

    return (
        <main className="wrapper">
            <section className="gmap box_padding">
                <div className="gmapbox">
                    <div id="googleMap" className="map">
                        <Map />
                    </div>
                </div>
            </section>

            <ContactForm />
        </main>
    );
};

export default ContactContainer;