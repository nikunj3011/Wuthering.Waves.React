import $ from 'jquery';
import React, { useEffect } from 'react';
import ShopSidebar from '../components/forJSON/ShopSidebar';
import ShopFilter from './ShopFilter';
import TabContent from './TabContent';

const ShopContainer02 = () => {
    useEffect(() => {

        // Load More Content
        $(".product_view_list .product_item").slice(0, 6).show();
        $(".product_view_list #load-more").on("click", function (e) {
            e.preventDefault();
            $(".product_view_list .product_item:hidden").slice(0, 3).slideDown();
            if ($(".product_view_list .product_item:hidden").length == 0) {
                $(".product_view_list #load-more").css('display', 'none');
            }
        });


        // Product Zoom
        $('.product_zoom_button_group > li > a').eq(0).addClass("selected");
        $('.product_zoom_container > .product_zoom_info').eq(0).css('display', 'block');
        $('.product_zoom_button_group').on("click", function (e) {
            if ($(e.target).is("a")) {

                /*Handle Tab Nav*/
                $('.product_zoom_button_group > li > a').removeClass("selected");
                $(e.target).addClass("selected");

                /*Handles Tab Content*/
                var clicked_index = $("a", this).index(e.target);
                $('.product_zoom_container > .product_zoom_info').css('display', 'none');
                $('.product_zoom_container > .product_zoom_info').eq(clicked_index).fadeIn();
            }
            $(this).blur();
            return false;
        });

    }, []);
    return (
        <section className="shop_page bg-dark-200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-sm-8 ps-lg-4">
                        <ShopFilter />
                        <TabContent />
                    </div>

                    <div className="col-lg-3 col-md-5 col-sm-4">
                        <ShopSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopContainer02;