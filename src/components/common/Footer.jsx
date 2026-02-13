import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[var(--secondary-background-color)] py-20 mt-auto">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Company Info */}
                <div className="flex flex-col space-y-6">
                    <Link to="/" className="text-2xl font-bold text-[var(--light-color)]">
                        Brewing BnB
                    </Link>
                    <p className="text-[var(--light-color-alt)] text-sm leading-relaxed opacity-80">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad magni expedita.
                    </p>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-instagram-line"></i></a>
                        </li>
                        <li>
                            <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-facebook-circle-line"></i></a>
                        </li>
                        <li>
                            <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-twitter-line"></i></a>
                        </li>
                        <li>
                            <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-pinterest-line"></i></a>
                        </li>
                    </ul>
                    <span className="text-xs text-[var(--light-color-alt)] opacity-60">&copy;2024 Brewing BnB. All rights reserved.</span>
                </div>

                {/* Categories */}
                <div>
                    <h6 className="text-[var(--light-color)] font-bold uppercase mb-6 text-sm tracking-wider">Categories</h6>
                    <ul className="space-y-4">
                        {['Travel', 'Food', 'Technology', 'Health', 'Nature', 'Fitness'].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors text-sm">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h6 className="text-[var(--light-color)] font-bold uppercase mb-6 text-sm tracking-wider">Useful links</h6>
                    <ul className="space-y-4">
                        {['Home', 'Elements', 'Tags', 'Authors', 'Membership'].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors text-sm">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-[var(--light-color)] font-bold uppercase mb-6 text-sm tracking-wider">Company</h6>
                    <ul className="space-y-4">
                        {['Contact us', 'F.A.Q', 'Careers', 'Authors', 'Memberships'].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors text-sm">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
