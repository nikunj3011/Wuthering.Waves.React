import $ from 'jquery';
import React, { useEffect } from 'react';

const Loader = () => {
    useEffect(() => {
        // Preloader
        setTimeout(function () {
            $('#preloader').addClass('hide');
        }, 200);

        $("#preloader").append('<div class="hide-loader">Hide Preloader</div>');
        $('.hide-loader').click(function (e) {
            $(this).parent().addClass('hide');
        });
    }, []);

    return (
        <div id="preloader">
            <div className="preloader-inner">
                <div className="spinner"></div>
                <div className="loading-text">
                    <span data-preloader-text="M" className="characters">M</span>

                    <span data-preloader-text="R" className="characters">R</span>

                    <span data-preloader-text="I" className="characters">I</span>

                    <span data-preloader-text="T" className="characters">T</span>

                    <span data-preloader-text="T" className="characters">T</span>

                    <span data-preloader-text="I" className="characters">I</span>

                    <span data-preloader-text="K" className="characters">K</span>
                </div>
            </div>
        </div>

    );
};

export default Loader;