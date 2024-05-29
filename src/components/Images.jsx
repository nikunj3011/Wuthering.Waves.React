import React from 'react';

const Images = (data) => {

    return (
        <div className="about_image">
            <img src={data} alt="img" />
        </div>
    );
};

export default Images;