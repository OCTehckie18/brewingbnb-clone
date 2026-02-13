import React, { useEffect } from 'react';
import FeaturedContent from '../components/home/FeaturedContent';
import TrendingSidebar from '../components/home/TrendingSidebar';
import QuickRead from '../components/home/QuickRead';
import OlderPosts from '../components/home/OlderPosts';
import PopularTags from '../components/home/PopularTags';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="pb-8 pt-4">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <FeaturedContent />
                    <TrendingSidebar />
                </div>
            </section>

            <QuickRead />
            <OlderPosts />
            <PopularTags />
            <Newsletter />
        </>
    );
};

export default Home;
