import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-20 bg-[var(--primary-background-color)]">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--light-color)] mb-6">Subscribe to Brewing BnB</h2>
                <p className="text-[var(--light-color-alt)] mb-10 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing quaerat dignissimos.
                </p>

                <form className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full sm:w-auto flex-grow p-4 bg-[var(--primary-background-color)] text-[var(--light-color)] border-2 border-[var(--secondary-background-color)] border-r-0 focus:outline-none focus:border-[var(--light-color-alt)] transition-colors"
                    />
                    <button type="submit" className="w-full sm:w-auto bg-[var(--secondary-background-color)] text-[var(--light-color)] font-bold uppercase tracking-widest px-8 py-4 border-2 border-[var(--secondary-background-color)] hover:bg-[var(--light-color)] hover:text-[var(--secondary-background-color)] hover:border-[var(--light-color)] transition-all duration-300 flex items-center justify-center">
                        <i className="ri-mail-send-line text-xl"></i>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
