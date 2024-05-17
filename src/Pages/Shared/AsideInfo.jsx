import React from 'react';

const AsideInfo = () => {
    return (
        <div className="aside_info_wrapper">
            <button className="aside_close"><i className="bi bi-x-lg"></i></button>
            <div className="aside_logo">
                <a href="/" className="light_logo"><img src="images/logo-light-lg.svg" alt="logo" /></a>
                <a href="/" className="dark_logo"><img src="images/logo-dark-lg.svg" alt="logo" /></a>
            </div >
            <div className="aside_info_inner">
                <p>Mrittik Architects is a full-service design firm providing architecture architecture.</p>

                <div className="aside_info_inner_box">
                    <h5>Contact Info</h5>
                    <p>+123 456 789 33</p>
                    <p>3 Madison Street, NY <br /> United States of America</p>
                    <p>mrittikarch@gmail.com</p>

                    <h5>Office Address</h5>
                    <p>+Time Square, New York <br /> USA, 3454</p>
                </div>
                <div className="social_sites">
                    <ul className="d-flex align-items-center justify-content-center">
                        <li><a><i className="bi bi-facebook"></i></a></li>
                        <li><a><i className="bi bi-twitter"></i></a></li>
                        <li><a><i className="bi bi-instagram"></i></a></li>
                        <li><a><i className="bi bi-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div >

    );
};

export default AsideInfo;