import $ from 'jquery';
import React, { useEffect } from 'react';

const MobileResponsiveMenu = () => {
    useEffect(() => {
        var counter = 0;
        tablet();
        function tablet() {
            function checkMedia(mql) {
                if (mql.matches) {
                    counter++;
                    $(".mr_menu .mr_navmenu").append($(".main_menu"));
                    if (counter === 1) {
                        menuClickAction();
                    }
                } else {
                    $(".header .mainnav").append($(".main_menu"));
                    if (counter === 1) {
                        menuClickAction();
                    }
                }
            }
            const mql = window.matchMedia('screen and (max-width: 1199.90px)');

            checkMedia(mql);
            mql.addEventListener('change', checkMedia);
        }

        // Sub-Menu Open On-Click
        $('.mr_menu ul.main_menu li.menu-item-has-children .submenu_opener').on("click", function (e) {
            $(this).parent().toggleClass('nav_open');
            $(this).siblings('ul').slideToggle();
            e.stopPropagation();
            e.preventDefault();
        });

        function menuClickAction() {
            // Mobile Responsive Menu 
            var mobileMenuContent = $('.mainnav').html();
            $('.mr_menu .mr_navmenu').append(mobileMenuContent);
            $('.mr_menu .mr_navmenu ul.main_menu li.menu-item-has-children').append($("<span class='submenu_opener d-lg-none'><i class='bi bi-chevron-right'></i></span>"));
        }

        // Active Mobile Responsive Menu : Add Class in body tag
        $('.mr_menu_toggle').on('click', function (e) {
            $('body').addClass('mr_menu_active');
            e.stopPropagation();
            e.preventDefault();
        });
        $('.mr_menu_close').on('click', function (e) {
            $('body').removeClass('mr_menu_active');
            e.stopPropagation();
            e.preventDefault();
        });
        $('.mr_menu_overlay').on('click', function (e) {
            $('body').removeClass('mr_menu_active');
            e.stopPropagation();
            e.preventDefault();
        });

    }, []);

    return (
        <div className="mr_menu d-lg-none">
            <div className="mr_menu_overlay"></div>
            <button type="button" className="mr_menu_close"><i className="bi bi-x-lg"></i></button>
            <div className="logo">
                <a href="/"><img src="images/logo-light.svg" alt="logo" /></a>
            </div>
            <div className="mr_navmenu"></div>
        </div>
    );
};

export default MobileResponsiveMenu;