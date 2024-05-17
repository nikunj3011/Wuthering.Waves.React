import React from 'react';
import '../assets/css/style.css';

const ErrorPage = () => {
    return (
        <>
            <div className="header-layer-bg"></div>

            <main className="wrapper">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-10 offset-lg-1">
                                <div className="error-content text-center">
                                    <div className="heading">404</div>
                                    <h1>Page Not Found</h1>
                                    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                                    <form className="search_form" action="search.php">
                                        <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                        <button type="submit" className="form-control-submit"><i className="bi bi-arrow-right"></i></button>
                                    </form>

                                    <div className="btn_group">
                                        <a href='/' className="btn black">Back To Home Page</a>
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

export default ErrorPage;