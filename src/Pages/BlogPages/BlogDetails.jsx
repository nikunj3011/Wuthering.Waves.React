import React from 'react';
import BlogDetailsContainer from '../../containers/BlogDetailsContainer';
import PageBanner from '../../containers/PageBanner';

const BlogDetails = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="California Mansion Residence" activePage="Blog-Details"></PageBanner>
            <BlogDetailsContainer />
        </>
    );
};

export default BlogDetails;