import Image from 'next/image'
import React from 'react'

function CarouselItem({ imgSrc, category, title }:
    {
        imgSrc: string,
        category: string,
        title: string
    }) {
    return (
        <div className='h-[350px] flex flex-col items-center justify-between rounded-[20px] border-[4px] border-[#00FF80]'>
            <Image src={imgSrc} alt="project" width={300} height={0} className='z-[0] absolute w-[99%] h-full maskImage object-cover rounded-[20px]' />
            <div></div>
            <div className='flex flex-col items-center justify-center gap-2 py-8 z-[1]'>
                <p className='text-black font-semibold px-4 py-2 bg-[#00FF80] rounded-[55px] text-sm'> {category} </p>
                <p className='text-white font-semibold text-2xl'> {title} </p>
            </div>
        </div>
    )
}

export default CarouselItem
