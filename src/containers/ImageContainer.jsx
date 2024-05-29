import React from 'react';

const ImageContainer = ({data}) => {

    return (
        <section className="bg-dark-100">
            <div className="container">
                <div className="row align-items-center">
                    {
                        data.map(a => 
                            <div className="col-lg-6 col-md-6" style={{padding:10}}>
                                <div className="">
                                    <img src={a} alt="img" />
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ImageContainer;