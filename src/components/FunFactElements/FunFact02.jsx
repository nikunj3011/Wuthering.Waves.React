import React from 'react';

const FunFact02 = ({ data }) => {
    const { contentName, contentNumber, plus } = data;
    return (
        <div className="funfact">
            <div className="funfact_content">
                <div className="d-flex align-items-center justify-content-center"><h2 className="fun-number">{contentNumber}</h2> <span>{plus}</span></div>
                <p>{contentName}</p>
            </div>
        </div>
    );
};

export default FunFact02;