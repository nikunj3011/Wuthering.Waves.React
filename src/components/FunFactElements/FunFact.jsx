import React from 'react';

const FunFact = ({ data }) => {
    const { contentName, contentNumber, plus, img } = data;

    return (
        <div className="funfact2 d-flex align-items-center">
            <div className="fun_img">
                <img src={img} alt="img" />
            </div>
            <div className="funfact_content">
                <p>{contentName}</p>
                <div className="d-flex align-items-center"><h2 className="fun-number">{contentNumber}</h2> <span>{plus}</span></div>
            </div>
        </div>
    );
};

export default FunFact;