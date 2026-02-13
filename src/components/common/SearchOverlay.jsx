import React, { useEffect, useRef } from 'react';

const SearchOverlay = ({ onClose }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-[var(--primary-background-color)] z-[9999] flex flex-col items-center justify-center p-6 animate-fade-in">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 border-2 border-[var(--secondary-background-color)] text-4xl text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors"
            >
                <i className="ri-close-line"></i>
            </button>

            <div className="w-full max-w-3xl text-center space-y-8">
                <form className="flex items-center border-b-2 border-[var(--secondary-background-color)] pb-4">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full bg-transparent text-3xl text-[var(--light-color)] placeholder-[var(--light-color-alt)] focus:outline-none"
                    />
                    <button type="submit" className="text-4xl text-[var(--light-color-alt)] hover:text-[var(--light-color)] transition-colors">
                        <i className="ri-search-line"></i>
                    </button>
                </form>
                <span className="block text-sm text-[var(--light-color-alt)] opacity-70">Or press ESC to close.</span>
            </div>
        </div>
    );
};

export default SearchOverlay;
