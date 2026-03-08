import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useBlog } from '../../context/BlogContext';
import { Link } from 'react-router-dom';

const QuickRead = () => {
    const { latestPosts } = useBlog();

    // Use dummy array if no posts yet to show skeleton or default images
    const displayPosts = latestPosts.length > 0 ? latestPosts : [1, 2, 3, 4, 5, 6];

    return (
        <section className="py-12 bg-[var(--primary-background-color)]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold uppercase text-[var(--light-color)] mb-12 relative" data-name="Quick read">
                    <span className="relative z-10">Quick read</span>
                    <span className="absolute top-[-1.5rem] left-[1rem] text-[5rem] text-[var(--light-color)] opacity-5 hidden md:block">Quick read</span>
                </h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {displayPosts.map((post, index) => {
                        const isDynamic = typeof post !== 'number';
                        const id = isDynamic ? post.id : index;
                        const title = isDynamic ? post.title : "Sample article title";
                        const date = isDynamic ? new Date(post.created_at).toLocaleDateString() : "23 Dec 2024";
                        const image = isDynamic && post.image_url ? post.image_url : `/assets/images/quick_read/quick_read_${(index % 6) + 1}.jpg`;
                        const readTime = isDynamic ? post.read_time : "3 Min read";

                        return (
                            <SwiperSlide key={id}>
                                <Link to={isDynamic ? `/post/${id}` : '/'} className="relative group overflow-hidden rounded-lg shadow-lg h-[25rem] md:h-[30rem] block">
                                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                                        <div className="flex items-center text-xs text-gray-300 mb-2 gap-2">
                                            <span>{date}</span>
                                            <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                                            <span>{readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-[var(--hover-light-color)] transition-colors line-clamp-2">{title}</h3>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default QuickRead;
