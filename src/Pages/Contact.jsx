import React from 'react';
import ContactContainer from '../containers/ContactContainer';
import PageBanner from '../containers/PageBanner';

const Contact = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="Contact" activePage="Contact"></PageBanner>
            <ContactContainer />
        </>
    );
};

export default Contact;