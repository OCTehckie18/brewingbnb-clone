
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { createPost, uploadImage, user, logout } = useBlog();
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
                created_at: new Date().toISOString(), // PHP might handle this too, but good to send
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

    return (
        <div className="min-h-screen bg-[var(--primary-background-color)] p-8 pt-24">
            <div className="max-w-4xl mx-auto bg-[var(--secondary-background-color)] p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[var(--light-color)]">Create New Post</h1>
                    <button onClick={handleLogout} className="btn fancy-border text-sm px-4 py-2">
                        <span>Logout</span>
                    </button>
                </div>

                {message && <p className={`mb-4 p-3 rounded ${message.includes('Error') ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>{message}</p>}

                <form onSubmit={handleCreatePost} className="space-y-6">
                    <div>
                        <label className="block text-[var(--light-color)] mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 bg-[var(--primary-background-color)] text-[var(--light-color)] rounded border border-[var(--light-color-alt)] focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[var(--light-color)] mb-2">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 bg-[var(--primary-background-color)] text-[var(--light-color)] rounded border border-[var(--light-color-alt)] focus:outline-none"
                        >
                            <option>Technology</option>
                            <option>Food</option>
                            <option>Health</option>
                            <option>Travel</option>
                            <option>Nature</option>
                            <option>Fitness</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[var(--light-color)] mb-2">Upload Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])}
                            className="text-[var(--light-color-alt)]"
                        />
                    </div>

                    <div>
                        <label className="block text-[var(--light-color)] mb-2">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows="10"
                            className="w-full p-3 bg-[var(--primary-background-color)] text-[var(--light-color)] rounded border border-[var(--light-color-alt)] focus:outline-none focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={uploading}
                        className="w-full bg-indigo-600 text-white font-bold py-3 rounded hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        {uploading ? 'Publishing...' : 'Publish Post'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminDashboard;
