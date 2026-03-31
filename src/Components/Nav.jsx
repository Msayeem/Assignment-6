import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Nav = ({product}) => {
    
    return (
      <div className='bg-white sticky top-0 `z-[1000]`'>
         <nav className=' py-4 lg:w-[90%] w-[95%] mx-auto flex justify-between items-center'>
        <div className='md:text-3xl font-bold'><h1 className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1></div>
       
       <ul className=' items-center gap-5 md:flex hidden'>
        <li><a className='hover:underline active:opacity-80 font-semibold text-[16px]' href="">Products</a></li>
        <li><a className='hover:underline active:opacity-80 font-semibold text-[16px]' href="">Features</a></li>
        <li><a className='hover:underline active:opacity-80 font-semibold text-[16px]' href="">Pricing</a></li>
        <li><a className='hover:underline active:opacity-80 font-semibold text-[16px]' href="">Testimonials</a></li>
        <li><a className='hover:underline active:opacity-80 font-semibold text-[16px]' href="">FAQ</a></li>
       </ul>

       <div className='flex items-center gap-4 relative'>
        <span className='absolute top-0 font-medium left-2 text-white text-[14px] bg-amber-700 rounded-full px-1.5'>{product.length}</span>
        <span><FiShoppingCart></FiShoppingCart></span>
        <button className='hover:underline active:opacity-80 font-semibold'>Login</button>
        <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[16px] font-semibold px-[16px] py-[12px] rounded-3xl hover:scale-[1.02] transition-transform active:opacity-80'>Get Started</button>
       </div>
       </nav>
      </div>
    );
};

export default Nav;