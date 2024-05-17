import React from 'react';

const Footer02 = () => {
    return (
        <footer className="footer p-0">
            <div className="footer_inner pb-0">
                <div className="footer_elements d-flex align-items-center justify-content-center">
                    <div className="footer_elements_inner">
                        <div className="footer_social">
                            <ul className="social_list justify-content-center">
                                <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                                <li className="twitter"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                <li className="instagram"><a href="#"><i className="bi bi-instagram"></i></a></li>
                                <li className="youbetube"><a href="#"><i className="bi bi-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="terms_condition">
                            <ul>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Condition</a></li>
                                <li><a href="#">Policy</a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p>Mrittik 2023. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer02;