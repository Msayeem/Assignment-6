import React from 'react';
import i1 from '../../assets/products/Group 5.png';
import i2 from '../../assets/products/Play.png';
import i3 from '../../assets/products/banner.png';

const Banner = () => {
    return (
        <div className='lg:w-[90%] w-[95%] py-20 mx-auto flex justify-between items-center gap-15 md:flex-row flex-col'>
            <div className='space-y-4'>
                <p className='bg-[#E1E7FF] w-[294px] py-[8px] px-[16px] rounded-3xl flex items-center gap-1  text-purple-700 font-medium text-[16px]'><img className='' src={i1} alt="" /> New: AI-Powered Tools Available</p>
            <h1 className='font-extrabold text-7xl'>Supercharge Your Digital Workflow</h1>
            <p className='w-[550px] text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>
<div className='flex items-center gap-4'>
    <button className='text-white font-bold text-[16px] py-2 px-4 rounded-3xl  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
<button className='flex items-center gap-1 border-2 border-purple-600 font-bold text-[16px] py-2 px-4 rounded-3xl'><img src={i2} alt="" />Watch Demo</button></div>
            </div>
            

            <div>
                <img src={i3} alt="" />
            </div>
        </div>
    );
};

export default Banner;