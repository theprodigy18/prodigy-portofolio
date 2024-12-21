import React from 'react'
import FadeInY from './motion/FadeInY'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from './CarouselItem';

function Carousel() {
    return (
        <div className='w-full' id='project'>    
            <FadeInY startInView={50} className='w-full my-20'>
                <MaxWidthWrapper>
                    <h1 className="text-[#00FF80] font-semibold text-3xl md:text-5xl text-center mb-12"> My Project </h1>
                    <Swiper
                        spaceBetween={25}
                        slidesPerView={1}
                        className='h-[350px]'
                        breakpoints={{
                            765: {          // Untuk layar dengan lebar 640px atau lebih kecil
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <CarouselItem imgSrc='/images/mulia-kopi.png' category='Website' title='Mulia Kopi' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CarouselItem imgSrc='/images/steel-symphony.png' category='Game' title='Steel Symphony' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CarouselItem imgSrc='/images/smart-learning.png' category='Website' title='Smart Learning' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CarouselItem imgSrc='/images/eco-link.png' category='Game' title='Eco Link' />
                        </SwiperSlide>
                    </Swiper>
                </MaxWidthWrapper>
            </FadeInY>
        </div>
    )
}

export default Carousel
