import React, { use } from 'react';
import AllProducts from './AllProducts';

const Products = ({fet1, product, setProduct}) => {

let g1=use(fet1);

    return (
        <div>
            <div className='py-10 grid lg:grid-cols-3 gap-y-10 md:grid-cols-2 grid-cols-1 gap-x-8 lg:w-[90%] w-[95%] mx-auto'>
            {g1.map(data=>

                <AllProducts data={data} product={product} setProduct={setProduct}></AllProducts>
            )}
        </div>

        
        </div>
    );
};

export default Products;