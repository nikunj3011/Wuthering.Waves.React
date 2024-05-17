import $ from 'jquery';
import React, { useEffect } from 'react';
import './Header02Nav.css';

const Header02Nav = (props) => {
    useEffect(() => {
        // Sub-Menu Open On-Click
        $('.mr_menu_02 ul.main_menu li.menu-item-has-children .submenu_opener').on("click", function (e) {
            $(this).parent().toggleClass('nav_open');
            $(this).siblings('ul').slideToggle();
            e.stopPropagation();
            e.preventDefault();
        });

    }, []);

    return (
        <div className="bg-dark offcanvas offcanvas-start_02" tabIndex="-1" id={props.id} aria-labelledby="offcanvasNavbarLabel">
            <div className="mr_menu_02">
                <div className="mr_menu_02_overlay"></div>
                <button type="button" className="mr_menu_02_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                <div className="logo"><a src="index" className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a><a src="index" className="dark_logo"><img src="images/logo-dark.svg" alt="logo" /></a></div>
                <div className="mr_navmenu">
                    <ul className="main_menu">
                        <li className="menu-item menu-item-has-children">
                            <a href="/">Home</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/">Home One</a></li>
                                <li className="menu-item"><a href="/home-2">Home Two</a></li>
                                <li className="menu-item"><a href="/home-3">Home Three</a></li>
                                <li className="menu-item"><a href="/home-4">Home Four</a></li>
                                <li className="menu-item"><a href="/home-5">Home Five</a></li>
                                <li className="menu-item"><a href="/home-6">Home Six</a></li>
                                <li className="menu-item"><a href="/home-7">Home Seven</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <a href="/">Gallery</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/project-1">Projects One</a></li>
                                <li className="menu-item"><a href="/project-2">Projects Two</a></li>
                                <li className="menu-item"><a href="/project-3">Peojects Three</a></li>
                                <li className="menu-item"><a href="/project-details">Peoject Details</a></li>
                                <li className="menu-item"><a href="/project-details-2">Peoject Details Two</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                        </li>
                        <li className="menu-item menu-item-has-children">
                            <a href="/">Pages</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/about">About Us</a></li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="/">Team</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/team">Our Team</a></li>
                                        <li className="menu-item"><a href="/team-details">Team Details</a></li>
                                    </ul>
                                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="/">Services</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/service-1">Service One</a></li>
                                        <li className="menu-item"><a href="/service-2">Service Two</a></li>
                                        <li className="menu-item"><a href="/service-details">Service Details</a></li>
                                    </ul>
                                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="/">Shop</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                        <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                        <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                        <li className="menu-item"><a href="/shop-product">Product Details</a></li>
                                        <li className="menu-item"><a href="/shop-cart">Shop Cart</a></li>
                                        <li className="menu-item"><a href="/shop-checkout">Checkout</a></li>
                                        <li className="menu-item"><a href="/login">Login</a></li>
                                    </ul>
                                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                                </li>
                                <li className="menu-item"><a href="/404">404 Page</a></li>
                                <li className="menu-item"><a href="/coming-soon">Coming Soon</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                        </li>
                        <li className="menu-item"><a href="/contact">Contacts</a></li>
                        <li className="menu-item menu-item-has-children">
                            <a href="/">Blog</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/blog">Blog</a></li>
                                <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header02Nav;