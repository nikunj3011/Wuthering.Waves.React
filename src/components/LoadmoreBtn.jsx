import React from 'react';

const LoadmoreBtn = (props) => {
    return (
        <div className="btn_group mt-4 w-100 text-center">
            <button id="load-more" className={props.className}>{props.text}</button>
        </div>
    );
};

export default LoadmoreBtn;