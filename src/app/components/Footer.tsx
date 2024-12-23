import React from 'react'
import FadeInY from './motion/FadeInY'
import MaxWidthWrapper from './MaxWidthWrapper'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <div className='w-full' id='contact'>
            <FadeInY startInView={20} className='w-full bottom-0 bg-[#282727]'>
                <MaxWidthWrapper className='flex flex-col items-center justify-center gap-4 px-20 py-12'>
                    <div className='flex flex-wrap items-center justify-center gap-x-4'>
                        <SocialIcon network='github' url='https://github.com/theprodigy18' target="_blank" bgColor="transparent" fgColor="white" />
                        <SocialIcon network='itch.io' url='https://itch.io/profile/childprodigy18' target="_blank" bgColor="transparent" fgColor="white" />
                        <SocialIcon network='instagram' url='https://www.instagram.com/f_andika18' target="_blank" bgColor="transparent" fgColor="white" />
                        <SocialIcon network='linkedin' url='https://www.linkedin.com/in/febri-andika-88bb2929a' target="_blank" bgColor="transparent" fgColor="white" />
                        <SocialIcon network='whatsapp' url='https://wa.me/6282332748989' target="_blank" bgColor="transparent" fgColor="white" />
                        <SocialIcon network='discord' url='https://discord.com/users/598792277577695232' target="_blank" bgColor="transparent" fgColor="white" />
                        <SocialIcon network='email' url='mailto:febriandika4567@gmail.com?subject=Judul Pesan&body=Isi pesan di sini' target="_blank" bgColor="transparent" fgColor="white" />
                    </div>
                    <div>
                        <p className='text-white text-xs font-light'> Copyright © 2024 The Prodigy </p>
                    </div>
                </MaxWidthWrapper>
            </FadeInY>
        </div>
    )
}

export default Footer
