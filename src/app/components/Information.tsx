import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import FadeInX from './motion/FadeInX'

function Information() {
    return (
        <div className='w-full'>
            <MaxWidthWrapper className='flex items-center justify-center md:justify-between lg:px-[15%]'>
                <FadeInX startInView={-50} className='flex flex-col items-start justify-center gap-1 md:gap-4 absolute px-8 mt-16 md:mt-12 z-[2]'>
                    <p className='text-white text-3xl md:text-5xl font-semibold'> Hello, <br />I&apos;m Febri Andika </p>
                    <p className='text-[#00FF80] text-3xl md:text-5xl font-semibold'>Game Developer & <br /> Backend Programmer</p>
                    <p className='text-white font-light text-xs md:text-sm md:w-[350px]'>Bring your ideas to life through technology, with detail and performance as top priorities.</p>
                </FadeInX>
                <div className='hidden md:block'></div>
                <FadeInX startInView={50} className='justify-self-end z-[1]'>
                    <Image src={"/images/profile.png"} alt="profile" width={600} height={0} className='width-full maskImage' />
                </FadeInX>
            </MaxWidthWrapper>
        </div>
    )
}

export default Information
