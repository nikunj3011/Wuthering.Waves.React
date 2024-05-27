import React from 'react';

const PageBanner = (props) => {
    return (
        <>
            <div className="page_header">
                <div className="page_header_inner">
                    <div className="container">
                        <div className="page_header_content d-flex align-items-center justify-content-between">
                            <h2 className="heading">{props.title}</h2>
                            <ul className="breadcrumb d-flex align-items-center">
                                <li><a href="/">Home</a></li>
                                <li className="active">{props.activePage}</li>
                            </ul>
                        </div>
                        <h5 className="">{props.description}</h5>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBanner;