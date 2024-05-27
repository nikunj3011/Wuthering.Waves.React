import React from 'react';
import PageBanner from '../../containers/PageBanner';
import WeaponsSummary from '../../containers/ProjectContainers/WeaponsSummary';

const Weapons = () => {
    return (
        <>
        <PageBanner title="Weapons" activePage="Weapons" description="All Weapons available in Wuthering Waves!"/>
        <WeaponsSummary text='Load More' className='btn gray' />
        </>
    );
};

export default Weapons;