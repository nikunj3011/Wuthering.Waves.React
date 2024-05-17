import React from 'react';

const AboutContainer = () => {

    return (
        <section class="about style_two">
            <div class="large_font">
                <h2 class="floating_element text-dark-200 d-flex justify-content-center">About</h2>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-5 col-sm-6">
                        <div class="about_image">
                            {/* <img src="images/about/e1.svg" alt="About" class="line_frame_2" /> */}
                            <img src="images/about/a2.jpg" alt="img" class="abt_img_1" />
                            <img src="images/about/a3.jpg" alt="img" class="abt_img_2" />
                            <img src="images/about/e1.svg" alt="About" class="line_frame_1" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7 col-sm-6">
                        <div class="about_text_inner">
                            <div class="about_text mt-5">
                                <h2 class="text-white">ABOUT MRITTIK ARCHITECTS</h2>
                                <p>Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients.</p>
                            </div>

                            <div class="about_progress_box">
                                <div class="progress-classic position-relative mb-4">
                                    <div class="progress-label fw-semibold mb-2">Structure Design</div>
                                    <div class="progress overflow-visible"
                                        style={{ height: '4px' }}>
                                        <div class="progress-bar overflow-visible" role="progressbar" aria-label="Red example" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span class="progress-value fw-semibold">60%</span></div>
                                    </div>
                                </div>

                                <div class="progress-classic position-relative mb-4">
                                    <div class="progress-label fw-semibold mb-2">Interior Design</div>
                                    <div class="progress overflow-visible" style={{ height: '4px' }}>
                                        <div class="progress-bar overflow-visible" role="progressbar" aria-label="Red example" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span class="progress-value fw-semibold">60%</span></div>
                                    </div>
                                </div>

                                <div class="progress-classic position-relative">
                                    <div class="progress-label fw-semibold mb-2">Landscape Design</div>
                                    <div class="progress overflow-visible" style={{ height: '4px' }}>
                                        <div class="progress-bar overflow-visible" role="progressbar" aria-label="Red example" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span class="progress-value fw-semibold">60%</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="abt_author d-flex align-items-center gap-3 flex-wrap mt-5">
                                <div class="abt_author_pic flex-shrink-0">
                                    <img src="images/author.png" alt="img" />
                                </div>
                                <div class="abt_author_info flex-shrink-0">
                                    <h5>Maxim Alexhander</h5>
                                    <p class="mb-0">CEO, Mrittik Architecture</p>
                                </div>
                                <div class="abt_author_signature ps-3">
                                    <img src="images/sign.png" alt="signature" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;