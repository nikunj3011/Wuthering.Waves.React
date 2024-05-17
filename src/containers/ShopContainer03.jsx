import $ from 'jquery';
import React, { useEffect } from 'react';
import ShopFilter from './ShopFilter';
import TabContent02 from './TabContent02';

const ShopContainer03 = () => {
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
                <ShopFilter />
                <TabContent02 />
            </div>
        </section>
    );
};

export default ShopContainer03;