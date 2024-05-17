import React from 'react';

const ThankYou = () => {
    return (
        <>
            <div className="header-layer-bg"></div>

            <main className="wrapper">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-10 offset-lg-1">
                                <div className="error-content text-center">
                                    <div className="heading">THANK YOU</div>
                                    <h1>For Placing your order.</h1>
                                    <p>We have sent your order details to your inbox. Kindly, check it out.</p>

                                    <form className="search_form" action="search.php">
                                        <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                        <button type="submit" className="form-control-submit"><i className="bi bi-arrow-right"></i></button>
                                    </form>

                                    <div className="btn_group">
                                        <a href='/shop-1' className="btn black">Wanna Shop More?</a>
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

export default ThankYou;