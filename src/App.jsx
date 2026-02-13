import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="post" element={<Post />} />
          <Route path="post.html" element={<Navigate to="/post" replace />} />

          {/* Placeholders for links */}
          <Route path="signin" element={<div className="container mx-auto py-20 text-center text-[var(--light-color)]">Sign In Page Placeholder</div>} />
          <Route path="signup" element={<div className="container mx-auto py-20 text-center text-[var(--light-color)]">Sign Up Page Placeholder</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
