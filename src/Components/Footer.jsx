import React from 'react';
import i8 from '../../assets/products/Instagram.png';
import i9 from '../../assets/products/Facebook.png';
import i10 from '../../assets/products/Twitter.png';

const Footer = () => {
    return (
        <div className='bg-[#101727] py-15 px-5'>
            
<div className='border-b-2 pb-10 border-b-gray-700  lg:w-[70%] md:w-[90%] mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-15'>

    <div className='space-y-2'>
        <h1 className='text-4xl font-bold text-white'>DigiTools</h1>
        <p className='text-white'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
    </div>

    <div className='text-white space-y-2 flex flex-col'>
        <h1 className='text-2xl font-medium'>Product</h1>
        <a href="#" className='text-[16px] hover:underline'>Pricing</a>
        <a href="#" className='text-[16px] hover:underline'>Templates</a>
        <a href="#" className='text-[16px] hover:underline'>Product</a>
        <a href="#" className='text-[16px] hover:underline'>Integrations</a>
    </div>

    <div className='text-white space-y-2 flex flex-col'>
        <h1 className='text-2xl font-medium'>Company</h1>
        <a href="#" className='text-[16px] hover:underline'>About</a>
        <a href="#" className='text-[16px] hover:underline'>Blog</a>
        <a href="#" className='text-[16px] hover:underline'>Careers</a>
        <a href="#" className='text-[16px] hover:underline'>Press</a>
    </div>

    <div className='text-white space-y-2 flex flex-col'>
        <h1 className='text-2xl font-medium'>Resources</h1>
        <a href="#" className='text-[16px] hover:underline'>Documentation</a>
        <a href="#" className='text-[16px] hover:underline'>Help Center</a>
        <a href="#" className='text-[16px] hover:underline'>Community</a>
        <a href="#" className='text-[16px] hover:underline'>Contact</a>
    </div>

    <div className='space-y-3'>
        <h1 className='text-2xl font-medium text-white'>Social Links</h1>

        <div className='flex items-center gap-5'>
        <a href=""><img src={i8} alt="" /></a>
        <a href=""><img src={i9} alt="" /></a>
        <a href=""><img src={i10} alt="" /></a>
    </div>
    </div>

</div>

<div className='lg:w-[70%] w-[90%] mx-auto flex items-center gap-5 justify-between mt-10 md:flex-row flex-col'>
    <div><h2 className='text-white text-[16px]'>© 2026 Digitools. All rights reserved.</h2></div>
        
        <div className='flex items-center gap-4 md:flex-row flex-col'>
<a href='' className='text-white text-[16px] hover:underline'>Privacy Policy</a>
<a href='' className='text-white text-[16px] hover:underline'>Terms of Service </a>
<a href='' className='text-white text-[16px] hover:underline'>Cookies</a>
        </div>
        
</div>


        </div>
    );
};

export default Footer;