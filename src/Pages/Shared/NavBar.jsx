import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Layouts/Main';
import MiniCart from '../../containers/MiniCart';
import AsideInfo from './AsideInfo';
import MobileResponsiveMenu from './MobileResponsiveMenu';

const NavBar = () => {
    const [cart, setCart] = useContext(CartContext);

    // useEffect(() => {
    //     // Toggle Header Search
    //     $('.header_search .form-control-submit').on("click", function () {
    //         // e.preventDefault();
    //         $('.open_search').toggleClass('active');
    //     });

    //     // Aside info bar
    //     $('.aside_open').click(function (e) {
    //         e.preventDefault();
    //         $('.aside_info_wrapper').addClass('show');
    //     });
    //     $('.aside_close').click(function (e) {
    //         e.preventDefault();
    //         $('.aside_info_wrapper').removeClass('show');
    //     });

    //     // Sticky Header
    //     // var header = $("header");
    //     // $(window).scroll(function () {
    //     //     var scroll = $(window).scrollTop();

    //     //     if (scroll >= 50) {
    //     //         header.addClass("bg-dark sticky");
    //     //     } else {
    //     //         header.removeClass("bg-dark sticky");
    //     //     }
    //     // });
    // }, []);


    return (
        <>
            <header className="header">
                <div className="container">
                    <nav id='sidebar' className="header_inner d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <a href='/' className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a>
                            <a href='/' className="dark_logo"><img src="images/logo-dark.svg" alt="logo" /></a>
                        </div>


                        <div className="mainnav d-none d-lg-block">
                            <ul className="main_menu">
                                <li className="menu-item menu-item-has-children">
                                    <a>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive ? "active" : undefined}
                                            to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <NavLink to="/"
                                            >
                                                Home One
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/home-2"
                                            >
                                                Home Two
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/home-3"
                                            >
                                                Home Three
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/home-4"
                                            >
                                                Home Four
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/home-5"
                                            >
                                                Home Five
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/home-6"
                                            >
                                                Home Six
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/home-7"
                                            >
                                                Home Seven
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive ? "active" : undefined}
                                            to="/project-1">
                                            Gallery
                                        </NavLink>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><NavLink to="/project-1">Projects One</NavLink></li>
                                        <li className="menu-item"><NavLink to="/project-2">Projects Two</NavLink></li>
                                        <li className="menu-item"><NavLink to="/project-3">Peojects Three</NavLink></li>
                                        <li className="menu-item"><NavLink to="/project-details">Peoject Details</NavLink></li>
                                        <li className="menu-item"><NavLink to="/project-details-2">Peoject Details Two</NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive ? "active" : undefined}
                                            to="/shop-1">
                                            Pages
                                        </NavLink>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><NavLink to="/about">About Us</NavLink></li>
                                        <li className="menu-item menu-item-has-children"><NavLink to="/">Team</NavLink>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><NavLink to="/team">Our Team</NavLink></li>
                                                <li className="menu-item"><NavLink to="/team-details">Team Details</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><NavLink to="/service-1">Services</NavLink>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><NavLink to="/service-1">Service One</NavLink></li>
                                                <li className="menu-item"><NavLink to="/service-2">Service Two</NavLink></li>
                                                <li className="menu-item"><NavLink to="/service-details">Service Details</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><NavLink to="/shop-1">Shop</NavLink>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><NavLink to="/shop-1">Shop One</NavLink></li>
                                                <li className="menu-item"><NavLink to="/shop-2">Shop Two</NavLink></li>
                                                <li className="menu-item"><NavLink to="/shop-3">Shop Three</NavLink></li>
                                                {/* <li className="menu-item"><NavLink to="/shop-product">Product Details</NavLink></li> */}
                                                <li className="menu-item"><NavLink to="/shop-cart">Shop Cart</NavLink></li>
                                                <li className="menu-item"><NavLink to="/shop-checkout">Checkout</NavLink></li>
                                                <li className="menu-item"><NavLink to="/login">Login</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><NavLink to="/404">404 Page</NavLink></li>
                                        <li className="menu-item"><NavLink to="/coming-soon">Coming Soon</NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active" : undefined} to="/contact">
                                        Contacts
                                    </NavLink>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? "active" : undefined} to="/Blog">
                                        Blog
                                    </NavLink>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><NavLink to="/blog">Blog</NavLink></li>
                                        <li className="menu-item"><NavLink to="/blog-details">Blog Details</NavLink></li>
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


                            {/* MiniCart Button */}
                            <button className="navbar-toggler me-3 position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            >
                                <span className="bi bi-cart-dash-fill" />
                                <p className='position-absolute top-0 start-100 translate-middle rounded-circle cart-length-bg'>{cart.length}</p>
                            </button>

                            {/* Header Search */}
                            <div className="header_search">
                                <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                            </div>
                            <div className="open_search">
                                <form className="search_form" action="search.php">
                                    <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                    <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>

                            {/* Mobile Responsive Menu Toggle Button */}
                            <button type="button" className="mr_menu_toggle d-lg-none">
                                <i className="bi bi-list"></i>
                            </button>

                        </div>
                    </nav>
                </div>
            </header>

            <MobileResponsiveMenu />
            <MiniCart id='offcanvasNavbar' />
            <AsideInfo />
        </>
    );
};

export default NavBar;