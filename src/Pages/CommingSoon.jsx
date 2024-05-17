import $ from 'jquery';
import React from 'react';

const CommingSoon = () => {
    function makeTimer() {
        var endTime = new Date("14 March 2023");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);
    }
    setInterval(function () { makeTimer(); }, 1000);

    return (
        <>
            <div className="header-layer-bg"></div>

            <main className="wrapper">
                <section className="under-construction-page">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-10 offset-lg-1">
                                <div className="under-construction-content text-center">
                                    <p>Our Website Under Construction</p>
                                    <div className="heading">Coming Soon</div>
                                    <div id="countdown">
                                        <ul>
                                            <li><span id="days"></span>days</li>
                                            <li><span id="hours"></span>Hours</li>
                                            <li><span id="minutes"></span>Minutes</li>
                                            <li><span id="seconds"></span>Seconds</li>
                                        </ul>
                                    </div>

                                    <form className="search_form" action="search.php">
                                        <input type="email" name="email" className="keyword form-control" placeholder="Your Email Address.." />
                                        <button type="submit" className="form-control-submit">Subscribe</button>
                                    </form>

                                    <div className="btn_group">
                                        <a href="/about" className="btn black">About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default CommingSoon;