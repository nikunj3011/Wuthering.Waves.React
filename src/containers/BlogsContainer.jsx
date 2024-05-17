import React from 'react';
import BlogCard from '../components/BlogCard';
import PaginationDiv from '../components/PaginationDiv';

const BlogsContainer = () => {
    return (
        <section className="blog">
            <div className="container">
                <div className="row">
                    <BlogCard img='images/blog/1.jpg' title='Recent trends in designing space interiors 2019' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='01' />

                    <BlogCard img='images/blog/2.jpg' title='Space optimization is now considered as art' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='02' />

                    <BlogCard img='images/blog/3.jpg' title='Aga khan Award , 2019 see the best shots' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='03' />

                    <BlogCard img='images/blog/4.jpg' title='Space optimization is now considered as art' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='04' />

                    <BlogCard img='images/blog/5.jpg' title='Aga khan Award , 2019 see the best shots' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='05' />

                    <BlogCard img='images/blog/6.jpg' title='Recent trends in designing space interiors 2019' text='Lorem ipsum dolor sit amet consecteur adipiscing elitsed do eiusmod tempor incididunt labo dolore magnaaliqua. Ut eni ad minim veniam dolor sit amet consecteur.....' date='OCTOBER 20, 2022' dateTime='2022-10-20' postCount='06' />

                </div>
                <PaginationDiv />
            </div>
        </section>
    );
};

export default BlogsContainer;