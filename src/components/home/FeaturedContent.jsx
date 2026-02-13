import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';

const FeaturedContent = () => {
    const { featuredPosts, posts, loading } = useBlog();

    // Fallback if no featured posts are marked explicitly
    const displayPosts = featuredPosts.length > 0 ? featuredPosts : posts.slice(0, 3);
    const breakingNews = "Apple announces a new partnership..."; // Could also be dynamic later

    if (loading) {
        return <div className="lg:col-span-2 h-96 flex items-center justify-center text-[var(--light-color)]">Loading featured content...</div>;
    }

    return (
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[minmax(20rem,auto)]">

            {/* Headline Banner */}
            <div className="md:col-span-2 bg-[var(--secondary-background-color)] flex items-center gap-4 p-4 rounded-lg shadow-sm">
                <h3 className="fancy-border">
                    <span className="text-[var(--light-color)] text-xs uppercase tracking-widest font-bold">Breaking news</span>
                </h3>
                <span className="text-sm text-[var(--light-color-alt)] truncate flex-1">{breakingNews}</span>
            </div>

            {/* Articles */}
            {displayPosts.map((article, index) => {
                // Logic to span full width for the 3rd item (index 2)
                const isFullWidthKey = index === 2;
                const className = isFullWidthKey ? "md:col-span-2" : "";

                return (
                    <Link to="/post" key={article.id} className={`relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] ${className}`}>
                        <img src={article.image_url || "/assets/images/featured/featured-1.jpg"} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <span className="absolute top-4 right-4 bg-[var(--primary-background-color)] text-[var(--light-color)] text-xs font-bold uppercase px-3 py-1 z-20">{article.category}</span>
                        <div className="article-data-container group-hover:bg-[var(--hover-dark-color)]">
                            <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-2 gap-2">
                                <span>{new Date(article.created_at).toLocaleDateString()}</span>
                                <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                                <span>{article.read_time || "5 Min read"}</span>
                            </div>
                            <h3 className={`font-bold text-[var(--light-color)] group-hover:text-[var(--hover-light-color)] transition-colors ${isFullWidthKey ? 'text-xl md:text-2xl' : 'text-lg'}`}>{article.title}</h3>
                        </div>
                    </Link>
                )
            })}

        </div>
    );
};

export default FeaturedContent;
