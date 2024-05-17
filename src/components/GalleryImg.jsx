import React from 'react';

const GalleryImg = (props) => {
    return (
        <div className="gallery-image">
            <img src={props.img} alt="img" />
        </div>
    );
};

export default GalleryImg;