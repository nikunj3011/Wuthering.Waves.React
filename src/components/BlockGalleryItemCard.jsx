import React from 'react';

const BlockGalleryItemCard = (props) => {

    return (
        <li className="blocks-gallery-item">
            <figure>
                <img src={props.img} alt="img" />
                {/* <div className="popup-btn"><a href={props.img} data-fancybox="images"><i className="bi bi-plus"></i></a></div> */}

            </figure>
        </li>
    );
};

export default BlockGalleryItemCard;