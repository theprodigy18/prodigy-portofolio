import React, { JSX } from 'react';

// Tipe props untuk menerima elemen JSX sebagai Icon
interface MySkillItemProps {
    Icon: JSX.Element;  // Terima Icon sebagai elemen JSX
    title: string;
    desc: string;
}

const MySkillItem: React.FC<MySkillItemProps> = ({ Icon, title, desc }) => {
    return (
        <div className='w-[300px] h-[225px] bg-[#282727] flex flex-col items-center justify-center rounded-[20px] p-4'>
            {Icon}  {/* Render Icon yang diteruskan langsung sebagai JSX */}
            <p className='text-[#00FF80] font-semibold text-2xl mt-4'>{title}</p>  {/* Menampilkan title */}
            <p className='text-white text-sm font-light text-center'>{desc}</p>  {/* Menampilkan deskripsi */}
        </div>
    );
};

export default MySkillItem;
