import React from 'react';

const Mid = () => {
    return (
        <div className='my-15 flex items-center justify-center bg-gradient-to-r py-15 text-center text-white from-[#4F39F6] to-[#9514FA]'>
            <div className=' md:px-20 px-8 border-r-purple-300 border-r-2'>
                <h1 className='md:text-[60px] text-2xl font-extrabold'>50K+</h1>
                <p className='lg:text-2xl text-[10px] font-medium'>Active Users</p>
            </div>

            <div className=' md:px-20 px-8 border-r-purple-300 border-r-2'>
                <h1 className='md:text-[60px] text-2xl font-extrabold'>200K+</h1>
                <p className='lg:text-2xl text-[11px] font-medium'>Premium Tools</p>
            </div>

            <div className=' md:px-20 px-8 '>
                <h1 className='md:text-[60px] text-2xl font-extrabold'>4.9</h1>
                <p className='lg:text-2xl text-[11px] font-medium'>Rating</p>
            </div>
        </div>
    );
};

export default Mid;