import React from 'react';
import { Link } from 'react-router-dom';

const TrendingSidebar = () => {
    return (
        <div className="bg-[var(--secondary-background-color)] p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-xl font-bold text-[var(--light-color)] text-center mb-6 uppercase tracking-wider border-b border-[var(--transparent-light-color)] pb-4">Trending news</h3>

            <div className="flex flex-col gap-6">
                {[1, 2, 3, 4, 5].map((item) => (
                    <Link to="/post" key={item} className="flex flex-col sm:flex-row gap-4 group border-b border-[var(--transparent-light-color)] pb-6 last:border-0 last:pb-0">
                        <div className="relative w-full sm:w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                            <span className="absolute -top-2 -left-2 w-8 h-8 bg-[var(--primary-background-color)] text-[var(--light-color)] flex items-center justify-center rounded-full text-xs font-bold z-10 shadow-md">0{item}</span>
                            <img src={`/assets/images/trending/trending_${item}.jpg`} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-1 gap-2">
                                <span>23 Dec 2024</span>
                                <span className="w-1 h-1 bg-[var(--light-color-alt)] rotate-45"></span>
                                <span>3 Min read</span>
                            </div>
                            <h3 className="text-sm font-semibold text-[var(--light-color)] group-hover:text-[var(--light-color-alt)] transition-colors line-clamp-2">Sample article title for trending news</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrendingSidebar;
