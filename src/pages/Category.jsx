import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const Category = () => {
    const { categoryName } = useParams();
    const { posts, loading } = useBlog();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryName]);

    const filteredPosts = posts.filter(post =>
        post.category && post.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (loading) return <div className="min-h-screen pt-32 text-center text-[var(--light-color)]">Loading...</div>;

    return (
        <section className="py-12 mt-4 md:mt-8 pb-20 min-h-[60vh]">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-[var(--light-color)] mb-8 capitalize">
                    Category: <span className="text-[var(--light-color-alt)]">{categoryName}</span>
                </h1>

                {filteredPosts.length === 0 ? (
                    <div className="text-center text-[var(--light-color-alt)] py-12">
                        <p className="text-xl">No posts found in this category.</p>
                        <Link to="/" className="inline-block mt-4 text-[var(--light-color)] hover:underline">
                            Return to Home
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredPosts.map((post) => (
                            <Link to={`/post/${post.id}`} key={post.id} className="flex flex-col bg-[var(--secondary-background-color)] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
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
                )}
            </div>
        </section>
    );
};

export default Category;
