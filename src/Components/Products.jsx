import React, { use } from 'react';

const Products = ({fet1}) => {

let g1=use(fet1);

    return (
        <div>
            {g1.map(data=>

                <div>
                    <img src={data.icon} alt="" />
                </div>
            )}
        </div>
    );
};

export default Products;