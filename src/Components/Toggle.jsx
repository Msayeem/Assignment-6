import React, { useState } from 'react';
import Cart from './Cart';
import Products from './Products';
import Nav from './Nav';

const Toggle = ({fet1, product, setProduct}) => {

let [toggle, setToggle]=useState('product');


    return (
        <div>
            <h2 className='text-center font-extrabold md:text-5xl text-3xl'>Premium Digital Tools</h2>
            <p className='text-center text-[#627382] text-[18px] w-[80%] md:w-[50%] mb-8 mt-5 mx-auto'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            
            {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center gap-4">
  <input onClick={()=>setToggle('product')} type="radio" name="my_tabs_1" className="border-1 border-purple-700 tab font-bold text-[16px] px-5 rounded-3xl checked:!bg-gradient-to-r from-[#4F39F6] to-[#9514FA] checked:!text-white" aria-label="Products" defaultChecked/>
  <input onClick={()=>setToggle('cart')} type="radio" name="my_tabs_1" className="border-1 border-purple-700 tab font-bold text-[16px] px-5 rounded-3xl checked:!bg-gradient-to-r from-[#4F39F6] to-[#9514FA] checked:!text-white " aria-label={`Cart (${product.length})`}  />
  
</div>

{toggle=='product' ? <Products fet1={fet1} product={product} setProduct={setProduct}></Products> : <Cart product={product} setProduct={setProduct}></Cart>}
        </div>
    );
};

export default Toggle;