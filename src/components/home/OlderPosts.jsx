import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';

const OlderPosts = () => {
    const { posts, loading } = useBlog();
    // Older posts will just be the rest of the posts after featured/trending, or simply latest 6 for now
    const displayPosts = posts.slice(0, 6);

    if (loading) return null;

    return (
        <section className="py-12 bg-[var(--primary-background-color)]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold uppercase text-[var(--light-color)] mb-12 relative" data-name="Older posts">
                    <span className="relative z-10">Older posts</span>
                    <span className="absolute top-[-1.5rem] left-[1rem] text-[5rem] text-[var(--light-color)] opacity-5 hidden md:block">Older posts</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {displayPosts.map((post) => (
                        <Link to="/post" key={post.id} className="flex flex-col bg-[var(--secondary-background-color)] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img src={post.image_url || "/assets/images/older_posts/older_posts_1.jpg"} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-[var(--light-color-alt)] mb-3 gap-2">
                                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                    <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                                    <span>{post.read_time || "4 Min read"}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--light-color)] mb-3 group-hover:text-[var(--light-color-alt)] transition-colors">{post.title}</h3>
                                <p className="text-[var(--light-color-alt)] text-sm line-clamp-3 mb-4 flex-grow">
                                    {post.content ? post.content.substring(0, 100) + "..." : "Lorem ipsum dolor sit amet..."}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="btn uppercase text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-sm tracking-widest font-bold inline-flex items-center group">
                        See more <i className="ri-arrow-right-s-line text-xl ml-2 group-hover:translate-x-2 transition-transform"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OlderPosts;
