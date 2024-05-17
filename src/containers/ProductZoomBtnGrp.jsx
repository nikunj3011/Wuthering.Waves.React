import $ from 'jquery';
import React, { useEffect } from 'react';

const ProductZoomBtnGrp = (props) => {
    useEffect(() => {
        // Select 2
        // $('.basic_select').select2({});

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
        <ul className="product_zoom_button_group">
            <li className="product_zoom_button">
                <a className="selected" href="#" style={{ backgroundImage: `url(${props.bgImg1})` }}></a>
            </li>
            <li className="product_zoom_button">
                <a href="#" style={{ backgroundImage: `url(${props.bgImg2})` }}></a>
            </li>
            <li className="product_zoom_button">
                <a href="#" style={{ backgroundImage: `url(${props.bgImg3})` }}></a>
            </li>
            <li className="product_zoom_button">
                <a href="#" style={{ backgroundImage: `url(${props.bgImg4})` }}></a>
            </li>
        </ul>
    );
};

export default ProductZoomBtnGrp;