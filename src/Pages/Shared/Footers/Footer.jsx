import $ from 'jquery';
import React, { useEffect } from 'react';
import SectionGridLines from '../../../components/SectionGridLines';

const Footer = () => {
    //  

    useEffect(() => {
        // Totop Button
        $('.totop a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        // Hide header on scroll down
        const nav = document.querySelector(".header");
        const scrollUp = "top-up";
        let lastScroll = 800;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 800) {
                nav.classList.remove(scrollUp);
                $('.totop').removeClass('show');
                return;
            }

            if (currentScroll > lastScroll) {
                // down
                nav.classList.add(scrollUp);
                $('.totop').addClass('show');

            } else if (currentScroll < lastScroll) {
                // up
                nav.classList.remove(scrollUp);
                $('.totop').removeClass('show');
            }
            lastScroll = currentScroll;
        });

    }, []);
    return (
        <>
            <footer className="footer bg-dark-200 box_padding">
                <div className="footer_inner bg-black">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-4 col-md-2 col-sm-2">
                                <div className="section-header">
                                    <h2>Contact</h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-5">
                                <div className="communication">
                                    <div className="info_body"
                                    >
                                        <h6>Studio Website</h6>
                                        <h5>www.mrittikarchitects.com</h5>
                                    </div>
                                    <div className="info_body"
                                    >
                                        <h6>Email Address</h6>
                                        <h5>mrittikarchitects@gmail.com</h5>
                                    </div>
                                    <div className="info_body"
                                    >
                                        <h6>Phone No</h6>
                                        <h5>+123 (456789)</h5>
                                    </div>
                                    <div className="info_body">
                                        <h6>Office Address</h6>
                                        <h5>3 Madison Street NY, USA</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-5">
                                <div className="footer_elements d-flex align-items-center justify-content-end">
                                    <div className="footer_elements_inner">
                                        <div className="footer_logo"
                                        >
                                            <a href="/" className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a>
                                        </div>
                                        <div className="footer_social">
                                            <ul className="social_list">
                                                <li className="facebook"
                                                ><a><i className="bi bi-facebook"></i></a></li>
                                                <li className="twitter"
                                                ><a><i className="bi bi-twitter"></i></a></li>
                                                <li className="instagram"
                                                ><a><i className="bi bi-instagram"></i></a></li>
                                                <li className="youbetube"><a><i className="bi bi-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="terms_condition">
                                            <ul>
                                                <li><a>Terms</a></li>
                                                <li><a>Condition</a></li>
                                                <li><a>Policy</a></li>
                                            </ul>
                                        </div>
                                        <div className="copyright"
                                        >
                                            <p>Mrittik 2023. All Rights Reserved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SectionGridLines />
                </div>
            </footer >

            <div className="totop">
                <a href="#">UP</a>
            </div>
        </>
    );
};

export default Footer;