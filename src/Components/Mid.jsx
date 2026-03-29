import React from 'react';

const Mid = () => {
    return (
        <div className='my-15 flex items-center justify-center bg-gradient-to-r py-15 text-center text-white from-[#4F39F6] to-[#9514FA]'>
            <div className=' px-20 border-r-purple-300 border-r-2'>
                <h1 className='text-[60px] font-extrabold'>50K+</h1>
                <p className='text-[24px] font-medium'>Active Users</p>
            </div>

            <div className=' px-20 border-r-purple-300 border-r-2'>
                <h1 className='text-[60px] font-extrabold'>200K+</h1>
                <p className='text-[24px] font-medium'>Premium Tools</p>
            </div>

            <div className=' px-20 '>
                <h1 className='text-[60px] font-extrabold'>4.9</h1>
                <p className='text-[24px] font-medium'>Rating</p>
            </div>
        </div>
    );
};

export default Mid;