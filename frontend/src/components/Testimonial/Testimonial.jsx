import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import farmerAvatar1 from '../../assets/images/patient-avatar.png';
import farmerAvatar2 from '../../assets/images/person1.jpg';
import farmerAvatar3 from '../../assets/images/person2.jpg';
import farmerAvatar4 from '../../assets/images/person3.jpg';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={farmerAvatar1} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Said Ahmad
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                            "The poultry disease detection system has been a game-changer for our farm,
                            providing timely alerts and improving overall bird health!"
                        </p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={farmerAvatar1} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    John Kaberi
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                            "The poultry disease detection system revolutionized our farm's health management, ensuring early detection
                            and prevention, resulting in healthier flocks!"
                        </p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={farmerAvatar1} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Kiprotich Kibet
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                            
                            "Our farm experienced a remarkable turnaround with the poultry disease detection system,
                            safeguarding our birds' health and boosting productivity."
                        </p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={farmerAvatar1} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Emejen Katii
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                            "Thanks to the poultry disease detection system, our farm's health management has improved significantly,
                            ensuring healthier flocks and increased productivity.!"
                        </p>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Testimonial;