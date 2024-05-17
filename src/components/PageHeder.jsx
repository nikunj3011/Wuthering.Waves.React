import React from 'react';

const PageHeder = (props) => {
    return (
        <h2 className={props.className}>{props.title}</h2>
    );
};

export default PageHeder;