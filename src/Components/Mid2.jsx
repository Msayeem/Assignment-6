import React from 'react';
import i5 from '../../assets/products/user.png';
import i6 from '../../assets/products/rocket.png';
import i7 from '../../assets/products/package.png';


const Mid2 = () => {
    return (
        <div className='lg:w-[70%] w-[90%] mx-auto py-20'>
            
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold'>Get Started in 3 Steps</h3>
                <p className='text-[#627382] text-[18px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='py-15 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

                <div className='text-center p-3 relative overflow-hidden space-y-3'>
                    <span className='px-3 py-2 text-[18px] font-bold rounded-full absolute top-0 right-7 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>01</span>
                    <img className='p-5 mx-auto bg-purple-100 rounded-4xl' src={i5} alt="" />
                <h1 className='text-2xl font-bold'>Create Account</h1>
                <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='text-center p-3 relative overflow-hidden space-y-3'>
                    <span className='px-3 py-2 text-[18px] font-bold rounded-full absolute top-0 right-7 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>02</span>
                    <img className=' mx-auto bg-purple-100 p-5 rounded-4xl' src={i7} alt="" />
                <h1 className='text-2xl font-bold'>Choose Products</h1>
                <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='text-center p-3 relative overflow-hidden space-y-3'>
                    <span className='px-3 py-2 text-[18px] font-bold rounded-full absolute top-0 right-7 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>03</span>
                    <img className='p-5 mx-auto bg-purple-100 rounded-4xl' src={i6} alt="" />
                <h1 className='text-2xl font-bold'>Start Creating</h1>
                <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
               
            </div>
        </div>
    );
};

export default Mid2;