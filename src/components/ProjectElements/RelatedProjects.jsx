import Isotope from 'isotope-layout';
import React, { useEffect } from 'react';
import RelatedProjectCard from './RelatedProjectCard';

const RelatedProjects = () => {
    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            // layoutMode: 'packery',
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy();

    }, []);
    return (
        <div className="related-posts">
            <h6 className="widget-title mb-2">
                More Projects
                <span className="title-line"></span>
            </h6>
            <div className="grid grid-3 gutter-15 clearfix">
                <div className="grid-sizer"></div>
                <div className="grid-item residences">
                    <RelatedProjectCard img='images/portfolio/4.jpg' name='California young menz club' />
                </div>
                <div className="grid-item interiors">
                    <RelatedProjectCard img='images/portfolio/2.jpg' name='California young menz club' />
                </div>
                <div className="grid-item residences">
                    <RelatedProjectCard img='images/portfolio/3.jpg' name='California young menz club' />
                </div>
            </div>
        </div>
    );
};

export default RelatedProjects;