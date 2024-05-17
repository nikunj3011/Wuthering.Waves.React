import $ from 'jquery';
import React, { useEffect } from 'react';
import FunFact02 from '../../components/FunFactElements/FunFact02';

const FunFacts = (props) => {
    const FunFactData = [
        {
            id: '1',
            contentName: 'Design Drawing',
            contentNumber: '120',
        },
        {
            id: '2',
            contentName: 'Project Completed',
            contentNumber: '210',
            plus: '+',
        },
        {
            id: '3',
            contentName: 'Design Drawing',
            contentNumber: '15',
        },
        {
            id: '4',
            contentName: 'Project Running',
            contentNumber: '62',
        },
    ];
    useEffect(() => {
        var a = 0;
        $(window).on("scroll", function () {

            var oTop = $('#funfacts').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.fun-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        });
    }, []);
    return (
        <section className={props.className} id="funfacts">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="funfacts_inner justify-content-around">
                            {
                                FunFactData.map(data =>
                                    <FunFact02
                                        key={data.id}
                                        data={data}
                                    />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFacts;