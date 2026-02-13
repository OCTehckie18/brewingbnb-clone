import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { createPost, uploadImage, user, logout, posts, deletePost } = useBlog();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('Technology');
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!user) {
            navigate('/admin/login');
        }
    }, [user, navigate]);

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();
        setUploading(true);
        setMessage('');

        try {
            let imageUrl = '';

            // Upload Image via PHP script
            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }

            // Create Post via PHP script
            await createPost({
                title,
                content,
                category,
                image_url: imageUrl,
                created_at: new Date().toISOString(),
                read_time: '5 Min read',
                is_featured: false,
                is_trending: false
            });

            setMessage('Post created successfully!');
            setTitle('');
            setContent('');
            setImageFile(null);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await deletePost(id);
                // Context updates state, so UI refreshes automatically
            } catch (error) {
                alert("Failed to delete post: " + error.message);
            }
        }
    }

    return (
        <div className="min-h-screen bg-[var(--primary-background-color)] py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-[var(--light-color)]">Host Dashboard</h1>
                    <button onClick={handleLogout} className="text-[var(--light-color-alt)] hover:text-[var(--light-color)]">Logout</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Create Post Section */}
                    <div className="bg-[var(--secondary-background-color)] p-8 rounded-lg shadow-lg h-fit">
                        <h2 className="text-xl font-bold text-[var(--light-color)] mb-6">Create New Post</h2>

                        {message && <div className={`p-4 mb-6 rounded ${message.includes('Error') ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>{message}</div>}

                        <form onSubmit={handleCreatePost} className="space-y-6">
                            <div>
                                <label className="block text-[var(--light-color-alt)] text-sm mb-2">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full bg-[var(--primary-background-color)] border border-[var(--transparent-light-color)] text-[var(--light-color)] rounded p-3 focus:outline-none focus:border-[var(--light-color)]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[var(--light-color-alt)] text-sm mb-2">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-[var(--primary-background-color)] border border-[var(--transparent-light-color)] text-[var(--light-color)] rounded p-3 focus:outline-none focus:border-[var(--light-color)]"
                                >
                                    <option value="Technology">Technology</option>
                                    <option value="Food">Food</option>
                                    <option value="Health">Health</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[var(--light-color-alt)] text-sm mb-2">Content</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full bg-[var(--primary-background-color)] border border-[var(--transparent-light-color)] text-[var(--light-color)] rounded p-3 h-40 focus:outline-none focus:border-[var(--light-color)]"
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-[var(--light-color-alt)] text-sm mb-2">Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                    className="w-full text-[var(--light-color-alt)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--light-color)] file:text-[var(--primary-background-color)] hover:file:bg-[var(--light-color-alt)]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={uploading}
                                className="w-full btn fancy-border py-3 text-[var(--light-color)] font-bold uppercase tracking-widest disabled:opacity-50"
                            >
                                {uploading ? 'Creating...' : 'Create Post'}
                            </button>
                        </form>
                    </div>

                    {/* Manage Posts Section */}
                    <div className="bg-[var(--secondary-background-color)] p-8 rounded-lg shadow-lg h-fit">
                        <h2 className="text-xl font-bold text-[var(--light-color)] mb-6">Manage Posts</h2>
                        <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                            {posts.length > 0 ? (
                                posts.map(post => (
                                    <div key={post.id} className="flex justify-between items-center p-4 bg-[var(--primary-background-color)] rounded border border-[var(--transparent-light-color)] hover:border-[var(--light-color)] transition-colors">
                                        <div className="flex-1 mr-4">
                                            <h3 className="text-[var(--light-color)] font-bold line-clamp-1">{post.title}</h3>
                                            <p className="text-xs text-[var(--light-color-alt)] mt-1">{new Date(post.created_at).toLocaleDateString()}</p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="text-red-400 hover:text-red-300 ml-2 p-2 rounded hover:bg-red-900/20 transition-colors"
                                            title="Delete Post"
                                        >
                                            <i className="ri-delete-bin-line text-xl"></i>
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-[var(--light-color-alt)] text-center py-8">No posts yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
