import React from 'react';
import { Link } from 'react-router-dom';

const PopularTags = () => {
    const tags = [
        { name: 'Travel', img: 'travel-tag.jpg' },
        { name: 'Food', img: 'food-tag.jpg' },
        { name: 'Technology', img: 'technology-tag.jpg' },
        { name: 'Health', img: 'health-tag.jpg' },
        { name: 'Nature', img: 'nature-tag.jpg' },
        { name: 'Fitness', img: 'fitness-tag.jpg' },
    ];

    return (
        <section className="py-12 bg-[var(--primary-background-color)]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold uppercase text-[var(--light-color)] mb-12 relative" data-name="Popular tags">
                    <span className="relative z-10">Popular tags</span>
                    <span className="absolute top-[-1.5rem] left-[1rem] text-[5rem] text-[var(--light-color)] opacity-5 hidden md:block">Popular tags</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {tags.map((tag) => (
                        <Link to="/post" key={tag.name} className="relative group overflow-hidden rounded-lg aspect-square">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[var(--transparent-dark-color)] text-[var(--light-color)] px-4 py-2 font-bold uppercase tracking-wider backdrop-blur-sm group-hover:text-[var(--hover-light-color)] transition-colors">#{tag.name}</span>
                            <img src={`/assets/images/tags/${tag.img}`} alt={tag.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularTags;
