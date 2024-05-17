import React from 'react';

const BlockGallery = (props) => {
    return (
        <figure className={props.className}>
            <ul className="blocks-gallery-grid">
                <li className="blocks-gallery-item mb-0 me-0">
                    <figure>
                        <a href="#"><img src={props.img} alt="img" className="block-image" /></a>
                    </figure>
                </li>
            </ul>
        </figure>
    );
};

export default BlockGallery;