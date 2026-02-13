import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchOverlay from './SearchOverlay';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                toggleSearch={toggleSearch}
                closeMenu={closeMenu}
            />
            {isSearchOpen && <SearchOverlay onClose={closeSearch} />}
            <main className="flex-grow pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
