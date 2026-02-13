import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const Post = () => {
    const { id } = useParams();
    const { posts, loading } = useBlog();
    const [post, setPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (posts.length > 0) {
            // loose comparison for string vs number id
            const foundPost = posts.find(p => p.id == id);
            setPost(foundPost);
        }
    }, [id, posts]);

    if (loading) return <div className="min-h-screen pt-32 text-center text-[var(--light-color)]">Loading...</div>;
    if (!post && !loading && posts.length > 0) return <div className="min-h-screen pt-32 text-center text-[var(--light-color)]">Post not found. <Link to="/" className="underline">Go Home</Link></div>;
    // If posts are still empty (initial load delay), show loading
    if (!post) return <div className="min-h-screen pt-32 text-center text-[var(--light-color)]">Loading post...</div>;

    return (
        <section className="py-12 mt-4 md:mt-8 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Post Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="bg-[var(--primary-background-color)] text-[var(--light-color)] text-xs font-bold uppercase px-3 py-1 mb-4 rounded">{post.category}</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-[var(--light-color)] mb-6 leading-tight">{post.title}</h1>
                    <div className="flex items-center text-sm text-[var(--light-color-alt)] mb-8 gap-4">
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                        <span>{post.read_time || "5 Min read"}</span>
                    </div>
                    {post.image_url && (
                        <img src={post.image_url} alt={post.title} className="w-full h-[20rem] md:h-[30rem] object-cover object-[center_10%] rounded-lg shadow-lg" />
                    )}
                </div>

                {/* Post Content */}
                <article className="space-y-8 text-[var(--light-color-alt)] text-lg leading-relaxed whitespace-pre-line">
                    {post.content}
                </article>

                {/* Minimal Author Footer (Static for now as we have single admin) */}
                <div className="border-t border-[var(--light-color-alt)] mt-12 pt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img src="/assets/images/author.jpg" alt="Admin" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-[var(--light-color)] font-bold">Admin</p>
                        <p className="text-sm text-[var(--light-color-alt)]">Brewing BnB Host</p>
                    </div>
                </div>

            </div>
        </section>
    );
};


export default Post;
