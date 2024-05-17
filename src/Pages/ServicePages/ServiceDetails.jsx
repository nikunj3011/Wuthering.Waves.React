import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ServiceContainer03 from '../../containers/ServiceContainer03';

const ServiceDetails = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="Service Details" activePage="California Mansion Residence" />
            <ServiceContainer03 />
        </>
    );
};

export default ServiceDetails;