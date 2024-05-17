import React from 'react';
import PageBanner from '../../containers/PageBanner';
import TeamDetailsContainer from '../../containers/TeamContainers/TeamDetailsContainer';

const TeamDetails = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="Benjamin Brook" activePage="Team" />
            <TeamDetailsContainer />

        </>
    );
};

export default TeamDetails;