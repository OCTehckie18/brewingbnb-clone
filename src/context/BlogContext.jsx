import React, { createContext, useContext, useState, useEffect } from 'react';

// Change this to your actual Hostinger domain after uploading PHP files
// Example: https://yourdomain.com/api
const API_URL = import.meta.env.VITE_API_URL || "https://brewingbnb.com/api";

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null); // Host/Admin user
    const [breakingNews, setBreakingNews] = useState("Loading...");

    // Derived states
    const featuredPosts = posts.filter(p => p.is_featured == 1).slice(0, 3);
    const trendingPosts = posts.filter(p => p.is_trending == 1).slice(0, 5);
    const latestPosts = posts.slice(0, 6);

    // Fetch initial data
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/get_posts.php`);
                const data = await response.json();

                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    console.error("API Error:", data);
                    setPosts([]);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
                setPosts([]);
            }

            try {
                const settingsRes = await fetch(`${API_URL}/get_settings.php`);
                const settings = await settingsRes.json();
                if (settings.breaking_news) {
                    setBreakingNews(settings.breaking_news);
                }
            } catch (error) {
                console.error('Error fetching settings:', error);
                setBreakingNews("Welcome to Brewing BnB!");
            } finally {
                setLoading(false);
            }
        };

        // Check active session (simple localStorage check for PHP auth)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        fetchPosts();
    }, []);

    // Host Actions
    const login = async (username, password) => {
        try {
            const response = await fetch(`${API_URL}/login.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();

            if (data.status === 'success') {
                setUser({ username: data.user });
                localStorage.setItem('user', JSON.stringify({ username: data.user }));
                return { user: data.user };
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const createPost = async (postData) => {
        try {
            const response = await fetch(`${API_URL}/create_post.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            const result = await response.json();

            if (result.status === 'success') {
                // Optimistic update
                const newPost = { ...postData, id: result.id, created_at: new Date().toISOString() };
                setPosts([newPost, ...posts]);
                return result;
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            throw error;
        }
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${API_URL}/upload_image.php`, {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        if (result.status === 'success') {
            return `${API_URL}/${result.url}`;
        } else {
            throw new Error(result.errors ? result.errors[0] : "Upload failed");
        }
    }

    const deletePost = async (id) => {
        try {
            const response = await fetch(`${API_URL}/delete_post.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const result = await response.json();

            if (result.status === 'success') {
                setPosts(posts.filter(p => p.id !== id));
                return true;
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error("Delete error:", error);
            throw error;
        }
    };

    const updateBreakingNews = async (headline) => {
        try {
            const response = await fetch(`${API_URL}/update_settings.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ breaking_news: headline })
            });
            const result = await response.json();
            if (result.status === 'success') {
                setBreakingNews(headline);
                return true;
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error("Update settings error:", error);
            throw error;
        }
    };

    const updatePostStatus = async (id, statusUpdates) => {
        try {
            const response = await fetch(`${API_URL}/update_post_status.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, ...statusUpdates })
            });
            const result = await response.json();

            if (result.status === 'success') {
                setPosts(posts.map(p => p.id === id ? { ...p, ...statusUpdates } : p));
                return true;
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error("Update status error:", error);
            throw error;
        }
    };

    const value = {
        posts,
        featuredPosts,
        trendingPosts,
        latestPosts,
        loading,
        user,
        login,
        logout,
        createPost,
        uploadImage,
        deletePost,
        updatePostStatus,
        breakingNews,
        updateBreakingNews
    };

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
