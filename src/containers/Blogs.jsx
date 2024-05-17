import React from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    return (
        <section className="blog pt-lg bg-dark-100">
            <div className="large_font">
                <h2 className="floating_element text-dark-200 d-flex justify-content-center">Latest</h2>
            </div>
            <div className="container">
                <div className="section-header text-center has_line">
                    <h2 className="text-white">LATEST BLOGS</h2>
                </div>

                <div className="row">
                    <BlogCard img='images/blog/1.jpg' title='Recent trends in designing space interiors 2019' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='01' />
                    <BlogCard img='images/blog/2.jpg' title='Space optimization is now considered as art' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='02' />
                    <BlogCard img='images/blog/3.jpg' title='Aga khan Award , 2019 see the best shots' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='03' />
                </div>
            </div>

        </section>
    );
};

export default Blogs;