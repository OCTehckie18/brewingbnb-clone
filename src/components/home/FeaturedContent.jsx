import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
    return (
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(20rem,auto)]">

            {/* Headline Banner */}
            <div className="md:col-span-2 bg-[var(--secondary-background-color)] flex items-center justify-between p-4 rounded-lg shadow-sm">
                <span className="bg-black text-[var(--light-color)] text-xs uppercase tracking-widest px-3 py-1 font-bold">Breaking news</span>
                <span className="text-sm text-[var(--light-color-alt)] truncate ml-4 flex-1">Apple announces a new partnership...</span>
            </div>

            {/* Article 1 */}
            <Link to="/post" className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] md:aspect-auto md:row-span-2">
                <img src="/assets/images/featured/featured-1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-4 right-4 bg-[var(--primary-background-color)] text-[var(--light-color)] text-xs font-bold uppercase px-3 py-1 z-20">Technology</span>
                <div className="article-data-container group-hover:bg-[var(--hover-dark-color)]">
                    <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-2 gap-2">
                        <span>Dec 5th 2024</span>
                        <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                        <span>8 Min read</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--light-color)] group-hover:text-[var(--hover-light-color)] transition-colors">Is VR the future?</h3>
                </div>
            </Link>

            {/* Article 2 */}
            <Link to="/post" className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img src="/assets/images/featured/featured-2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-4 right-4 bg-[var(--primary-background-color)] text-[var(--light-color)] text-xs font-bold uppercase px-3 py-1 z-20">Food</span>
                <div className="article-data-container group-hover:bg-[var(--hover-dark-color)]">
                    <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-2 gap-2">
                        <span>Dec 6th 2024</span>
                        <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                        <span>4 Min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--light-color)] group-hover:text-[var(--hover-light-color)] transition-colors">Fine dining 101</h3>
                </div>
            </Link>

            {/* Article 3 */}
            <Link to="/post" className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img src="/assets/images/featured/featured-3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-4 right-4 bg-[var(--primary-background-color)] text-[var(--light-color)] text-xs font-bold uppercase px-3 py-1 z-20">Health</span>
                <div className="article-data-container group-hover:bg-[var(--hover-dark-color)]">
                    <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-2 gap-2">
                        <span>Dec 5th 2024</span>
                        <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                        <span>5 Min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--light-color)] group-hover:text-[var(--hover-light-color)] transition-colors">Natural fat burner</h3>
                </div>
            </Link>

        </div>
    );
};

export default FeaturedContent;
