import $ from 'jquery';
import React, { useEffect, useState } from 'react';

const UpperHeader02 = () => {
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

        // Toggle Header Search
        $('.header_search .form-control-submit').click(function (e) {
            $('.open_search').toggleClass('active');
        });

        // Sticky Header
        var header = $("header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("bg-dark sticky");
            } else {
                header.removeClass("bg-dark sticky");
            }
        });
    }, []);

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header_inner d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <a href="/" className="light_logo"><img src="images/logo-light.svg" alt="logo" /></a>
                        <a href="/" className="dark_logo"><img src="images/logo-gray.svg" alt="logo" /></a>
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
                            <form className="search_form" action="search.php">
                                <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>

                        <button className="mr_menu_toggle position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHome" aria-controls="offcanvasHome"
                        >
                            <span className="bi bi-list" />
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default UpperHeader02;