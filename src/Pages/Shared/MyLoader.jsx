import $ from 'jquery';
import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => {
    useEffect(() => {
        // Preloader
        setTimeout(function () {
            $('#preloader').addClass('hide');
        }, 2000);

        // $("#preloader").append('<div className="hide-loader">Hide Preloader</div>');
        // $('.hide-loader').click(function (e) {
        //     $(this).parent().addClass('hide');
        // });
    }, []);

    return (
        <div id="preloader">
            <ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                backgroundColor="transparent"
                {...props}
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </div>
    );
};
export default MyLoader

