import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { toast } from 'react-toastify';

const AllProducts = ({data, product, setProduct}) => {

let handleBuy=()=>{
    if(product.includes(data)){
        toast.error('Product already added to Cart');
        return;
    }
    else{
        toast.success("Product added to Cart!")
    }
    setProduct([...product, data]);

    
}

    let g3=data.features.map(dat=> <span className='flex gap-2 items-center '><FcCheckmark></FcCheckmark><span className='text-[16px] font-medium'>{dat}</span></span>)
    return (
        <div className='p-4 shadow-purple-300 shadow-lg hover:shadow-purple-400 hover:scale-102 transition-[0.40s]'>
            <div className='space-y-3'>
                    <img src={data.icon} alt="" />
                    <h2 className='text-2xl font-bold'>{data.name}</h2>
                    <p className='text-[16px] text-[#627382]'>{data.description}</p>
                    <h2 className='text-[16px] text-[#627382]'><span className='font-bold text-2xl text-black'>${data.price}</span>/{data.period}</h2>
                    <span className=''>{g3}</span>
                    <button onClick={handleBuy} className='hover:scale-[1.02] transition-transform active:opacity-80 px-4 py-2 rounded-3xl mt-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[20px] font-bold w-full'>Buy Now</button>
                </div>
        </div>
    );
};

export default AllProducts;