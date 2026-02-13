import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const QuickRead = () => {
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
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <SwiperSlide key={item}>
                            <div className="relative group overflow-hidden rounded-lg shadow-lg h-[25rem] md:h-[30rem]">
                                <img src={`/assets/images/quick_read/quick_read_${item}.jpg`} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-10">
                                    <div className="flex items-center text-xs text-gray-300 mb-2 gap-2">
                                        <span>23 Dec 2024</span>
                                        <span className="w-1.5 h-1.5 bg-gray-300 rotate-45"></span>
                                        <span>3 Min read</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-[var(--hover-light-color)] transition-colors">Sample article title</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default QuickRead;
