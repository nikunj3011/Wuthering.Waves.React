import $ from 'jquery';
import React, { useEffect, useState } from 'react';

const UppereHeader03 = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        // Aside info bar
        $('.aside_open').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').addClass('show');
        });
        $('.aside_close').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').removeClass('show');
        });

    }, []);

    return (
        <header className="header bg-transparent">
            <div className="container-fluid">
                <div className="header_inner d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <a href="/" className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a>
                        <a href="/" className="dark_logo"><img src="images/logo-dark.svg" alt="logo" /></a>
                    </div>


                    <div className="mainnav d-none">
                        <ul className="main_menu">
                            <li className="menu-item menu-item-has-children active"><a href="/">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/">Home One</a></li>
                                    <li className="menu-item"><a href="home-2">Home Two</a></li>
                                    <li className="menu-item"><a href="home-3">Home Three</a></li>
                                    <li className="menu-item"><a href="home-4">Home Four</a></li>
                                    <li className="menu-item"><a href="home-5">Home Five</a></li>
                                    <li className="menu-item"><a href="home-6">Home Six</a></li>
                                    <li className="menu-item"><a href="home-7">Home Seven</a></li>
                                    <li className="menu-item"><a href="home-8">Home Eight</a></li>
                                    <li className="menu-item"><a href="home-9">Home Nine</a></li>
                                    <li className="menu-item active"><a href="home-10">Home Ten</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Gallery</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/project-1">Projects One</a></li>
                                    <li className="menu-item"><a href="/project-2">Projects Two</a></li>
                                    <li className="menu-item"><a href="/project-3">Peojects Three</a></li>
                                    <li className="menu-item"><a href="/project-details">Peoject Details</a></li>
                                    <li className="menu-item"><a href="/project-details-2">Peoject Details Two</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/about">About Us</a></li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Team</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="/team">Our Team</a></li>
                                            <li className="menu-item"><a href="/team-details">Team Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Services</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="/service-1">Service One</a></li>
                                            <li className="menu-item"><a href="/service-2">Service Two</a></li>
                                            <li className="menu-item"><a href="/service-details">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                            <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                            <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                            <li className="menu-item"><a href="/shop-product">Product Details</a></li>
                                            <li className="menu-item"><a href="/shop-cart">Shop Cart</a></li>
                                            <li className="menu-item"><a href="/shop-checkout">Checkout</a></li>
                                            <li className="menu-item"><a href="/login">Login</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="/404">404 Page</a></li>
                                    <li className="menu-item"><a href="/coming-soon">Coming Soon</a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="contact">Contacts</a></li>
                            <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="/blog">Blog</a></li>
                                    <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="header_right_part d-flex align-items-center">
                        <button className="aside_open">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>
                        <div className="header_search" onClick={handleToggle}>
                            <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                        </div>
                        <div id="open_search" className={isActive ? null : "active"}>
                            <form className="search_form" >
                                <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>

                        {/* Mobile Responsive Menu Toggle Button */}
                        <button type="button" className="mr_menu_toggle d-lg-none">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default UppereHeader03;