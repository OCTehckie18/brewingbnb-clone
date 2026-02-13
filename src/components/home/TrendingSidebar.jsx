
import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';

const TrendingSidebar = () => {
    const { trendingPosts, posts, loading } = useBlog();

    // Fallback: Use latest posts if no trending logic is set yet, exclude the ones in featured if needed, but simple slice is fine for now
    const displayPosts = trendingPosts.length > 0 ? trendingPosts : posts.slice(3, 8);

    if (loading) return <div className="h-96 flex items-center justify-center text-[var(--light-color)]">Loading...</div>;

    return (
        <div className="bg-[var(--secondary-background-color)] p-6 rounded-lg shadow-sm h-fit">
            <h3 className="text-xl font-bold text-[var(--light-color)] text-center mb-6 uppercase tracking-wider border-b border-[var(--transparent-light-color)] pb-4">Trending news</h3>

            <div className="flex flex-col gap-5">
                {displayPosts.map((post, index) => (
                    <Link to={`/post/${post.id}`} key={post.id} className="flex flex-col sm:flex-row gap-4 group border-b border-[var(--transparent-light-color)] pb-6 last:border-0 last:pb-0">
                        <div className="relative w-full sm:w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                            <span className="absolute -top-2 -left-2 w-8 h-8 bg-[var(--primary-background-color)] text-[var(--light-color)] flex items-center justify-center rounded-full text-xs font-bold z-10 shadow-md">0{index + 1}</span>
                            <img src={post.image_url || `/assets/images/trending/trending_${index + 1}.jpg`} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-1 gap-2">
                                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                <span className="w-1 h-1 bg-[var(--light-color-alt)] rotate-45"></span>
                                <span>{post.read_time || "3 Min read"}</span>
                            </div>
                            <h3 className="text-sm font-semibold text-[var(--light-color)] group-hover:text-[var(--light-color-alt)] transition-colors line-clamp-2">{post.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TrendingSidebar;
