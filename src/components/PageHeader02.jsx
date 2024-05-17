import React from 'react';

const PageHeader02 = (props) => {
    return (
        <>
            <div className="page_header in-service">
                <div className="page_header_inner">
                    <div className="container">
                        <div className="page_header_content d-flex align-items-center justify-content-between">
                            <h2 className="heading">{props.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-layer-bg"></div>
        </>
    );
};

export default PageHeader02;