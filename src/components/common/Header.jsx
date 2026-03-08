import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useBlog } from '../../context/BlogContext';

const Header = ({ isMenuOpen, toggleMenu, toggleSearch, closeMenu }) => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const { posts } = useBlog();

    // Extract unique categories
    const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Also close menu on route change
    useEffect(() => {
        closeMenu();
    }, [location, closeMenu]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''} bg-[var(--secondary-background-color)]`}>
            <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-[var(--light-color)]">
                    Brewing BnB
                </Link>

                <div className={`fixed top-[8.5rem] right-6 w-64 p-6 bg-[var(--secondary-background-color)] transition-all duration-300 transform origin-top-right z-40 lg:static lg:w-auto lg:p-0 lg:opacity-100 lg:scale-100 lg:bg-transparent ${isMenuOpen ? 'opacity-100 scale-100 shadow-xl' : 'opacity-0 scale-0 pointer-events-none lg:pointer-events-auto'}`}>
                    <ul className="flex flex-col lg:flex-row items-center gap-8">
                        <li>
                            <Link to="/" className={`uppercase text-sm tracking-widest hover:text-[var(--light-color)] transition-colors ${location.pathname === '/' ? 'text-[var(--light-color)]' : ''}`}>Home</Link>
                        </li>
                        {categories.length > 0 && (
                            <li className="relative group lg:py-4 cursor-pointer"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}>
                                <span className={`uppercase text-sm tracking-widest hover:text-[var(--light-color)] transition-colors flex items-center gap-1 ${location.pathname.startsWith('/category') ? 'text-[var(--light-color)]' : ''}`}>
                                    Categories <i className="ri-arrow-down-s-line"></i>
                                </span>
                                <div className={`absolute top-full left-0 mt-2 w-48 bg-[var(--secondary-background-color)] rounded-md shadow-lg py-2 z-50 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    {categories.map((cat, idx) => (
                                        <Link key={idx} to={`/category/${cat}`} className="block px-4 py-2 text-sm text-[var(--light-color-alt)] hover:text-[var(--light-color)] hover:bg-[var(--primary-background-color)]">
                                            {cat}
                                        </Link>
                                    ))}
                                </div>
                            </li>
                        )}
                        {/* Hidden on Large screens in original, only for mobile menu */}
                        <li className="lg:hidden">
                            <Link to="/signin" className="uppercase text-sm tracking-widest hover:text-[var(--light-color)] transition-colors">Sign in</Link>
                        </li>
                        <li className="lg:hidden">
                            <Link to="/signup" className="uppercase text-sm tracking-widest hover:text-[var(--light-color)] transition-colors">Sign up</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-6">
                    <button onClick={toggleTheme} className="text-2xl text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors focus:outline-none">
                        <i className={`ri-${theme === 'light' ? 'moon' : 'sun'}-line`}></i>
                    </button>

                    <button onClick={toggleSearch} className="text-2xl text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors focus:outline-none">
                        <i className="ri-search-line"></i>
                    </button>

                    <button onClick={toggleMenu} className="lg:hidden text-2xl text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors focus:outline-none">
                        <i className={`ri-${isMenuOpen ? 'close' : 'menu-3'}-line`}></i>
                    </button>

                    <Link to="/signin" className="hidden sm:block uppercase text-sm tracking-widest hover:text-[var(--light-color)] transition-colors">Sign in</Link>
                    <Link to="/signup" className="hidden sm:inline-flex btn fancy-border">
                        <span className="uppercase text-sm tracking-widest">Sign up</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
