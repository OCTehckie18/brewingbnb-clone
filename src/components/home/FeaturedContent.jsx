import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
    const breakingNews = "Apple announces a new partnership...";

    const articles = [
        {
            id: 1,
            title: "Is VR the future?",
            category: "Technology",
            date: "Dec 5th 2024",
            readTime: "8 Min read",
            image: "/assets/images/featured/featured-1.jpg",
            link: "/post",
            className: ""
        },
        {
            id: 2,
            title: "Fine dining 101",
            category: "Food",
            date: "Dec 6th 2024",
            readTime: "4 Min read",
            image: "/assets/images/featured/featured-2.jpg",
            link: "/post",
            className: ""
        },
        {
            id: 3,
            title: "Natural fat burner",
            category: "Health",
            date: "Dec 5th 2024",
            readTime: "5 Min read",
            image: "/assets/images/featured/featured-3.jpg",
            link: "/post",
            className: "md:col-span-2"
        }
    ];

    return (
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(20rem,auto)]">

            {/* Headline Banner */}
            <div className="md:col-span-2 bg-[var(--secondary-background-color)] flex items-center justify-between p-4 rounded-lg shadow-sm">
                <div className="fancy-border p-0.5">
                    <span className="text-[var(--light-color)] text-xs uppercase tracking-widest font-bold">Breaking news</span>
                </div>
                <span className="text-sm text-[var(--light-color-alt)] truncate ml-4 flex-1">{breakingNews}</span>
            </div>

            {/* Articles */}
            {articles.map((article) => (
                <Link to={article.link} key={article.id} className={`relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] ${article.className}`}>
                    <img src={article.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute top-4 right-4 bg-[var(--primary-background-color)] text-[var(--light-color)] text-xs font-bold uppercase px-3 py-1 z-20">{article.category}</span>
                    <div className="article-data-container group-hover:bg-[var(--hover-dark-color)]">
                        <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-2 gap-2">
                            <span>{article.date}</span>
                            <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                            <span>{article.readTime}</span>
                        </div>
                        <h3 className={`font-bold text-[var(--light-color)] group-hover:text-[var(--hover-light-color)] transition-colors ${article.className.includes('md:row-span-2') ? 'text-xl md:text-2xl' : 'text-lg'}`}>{article.title}</h3>
                    </div>
                </Link>
            ))}

        </div>
    );
};

export default FeaturedContent;
