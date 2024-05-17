import React from 'react';

const TeamCard02 = ({ data }) => {
    const { img, name, designation } = data;

    return (
        <div className="team-block">
            <img src={img} alt="img" />
            <h5 className="text-white"><a href="/team-details">{name}</a></h5>
            <h6 className="text-uppercase text-olive">{designation}</h6>
        </div>
    );
};

export default TeamCard02;