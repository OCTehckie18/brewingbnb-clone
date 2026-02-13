
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Post from './pages/Post';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { useBlog } from './context/BlogContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useBlog();

  if (loading) return <div className="min-h-screen flex items-center justify-center text-[var(--light-color)]">Loading...</div>;

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="post" element={<Post />} />
        <Route path="post.html" element={<Navigate to="/post" replace />} />

        {/* Admin Routes */}
        <Route path="admin/login" element={<AdminLogin />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Placeholders for links */}
        <Route path="signin" element={<div className="container mx-auto py-20 text-center text-[var(--light-color)]">Sign In Page Placeholder</div>} />
        <Route path="signup" element={<div className="container mx-auto py-20 text-center text-[var(--light-color)]">Sign Up Page Placeholder</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
