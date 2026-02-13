import React, { useEffect } from 'react';

const Post = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-12 mt-4 md:mt-8 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Post Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--light-color)] mb-6 leading-tight">Is VR the future?</h3>
                    <div className="flex items-center text-sm text-[var(--light-color-alt)] mb-8 gap-4">
                        <span>Dec 6th 2024</span>
                        <span className="w-1.5 h-1.5 bg-[var(--light-color-alt)] rotate-45"></span>
                        <span>4 Min read</span>
                    </div>
                    <img src="/assets/images/featured/featured-1.jpg" alt="" className="w-full h-[20rem] md:h-[30rem] object-cover object-[center_10%]" />
                </div>

                {/* Post Content */}
                <div className="space-y-8 text-[var(--light-color-alt)] text-lg leading-relaxed">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellat consequatur culpa, repudiandae aut dolores iusto. Rem natus soluta, dolores, ad deleniti, aut dolorem corrupti quasi amet unde delectus hic?
                    </p>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                    </p>

                    <blockquote className="bg-[var(--secondary-background-color)] p-8 rounded-lg relative my-8 border-l-4 border-[var(--light-color)]">
                        <p className="italic text-[var(--light-color)] text-xl font-light">
                            <span className="text-4xl text-[var(--light-color)] opacity-30 mr-2"><i className="ri-double-quotes-l"></i></span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates, laboriosam voluptatum quos non consequuntur nesciunt necessitatibus tempora quod inventore corporis rem nihil itaque, at provident minus aliquam veritatis. Labore?
                            <span className="text-4xl text-[var(--light-color)] opacity-30 ml-2"><i className="ri-double-quotes-r"></i></span>
                        </p>
                    </blockquote>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius possimus hic eligendi distinctio rerum incidunt, esse quasi eum molestiae ducimus ipsam quae, aliquid ullam placeat dolorum nulla vero. Quam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quod necessitatibus, aspernatur pariatur asperiores earum quas adipisci veritatis quidem facilis! Nihil veniam quaerat nulla possimus, asperiores vero voluptatum placeat. Eveniet!
                    </p>

                    {/* Author Section */}
                    <div className="bg-[var(--secondary-background-color)] p-6 md:p-8 rounded-lg grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-8 mt-16">
                        <div className="relative h-48 md:h-full overflow-hidden rounded-md">
                            <img src="/assets/images/author.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h3 className="text-2xl font-bold text-[var(--light-color)]">John Doe</h3>
                            <p className="text-[var(--light-color-alt)] text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quis repellat rerum, possimus cumque dolor repellendus eligendi atque explicabo exercitationem id.
                            </p>
                            <ul className="flex space-x-4 mt-auto">
                                <li>
                                    <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-instagram-line"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-facebook-circle-line"></i></a>
                                </li>
                                <li>
                                    <a href="#" className="text-[var(--light-color-alt)] hover:text-[var(--light-color)] text-xl transition-colors"><i className="ri-twitter-line"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Post;
