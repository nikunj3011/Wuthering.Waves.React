import React from 'react';
import PageBanner from '../../containers/PageBanner';
import GearSetsSummary from '../../containers/ProjectContainers/GearSetsSummary';

const GearSets = () => {
    return (
        <>
        <PageBanner title="Gear Sets" activePage="GearSets" description="All Gear sets available in Wuthering Waves!"/>
        <GearSetsSummary text='Load More' className='btn gray' />
        </>
    );
};

export default GearSets;