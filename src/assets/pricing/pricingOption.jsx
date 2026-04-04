import React, { use, useState } from 'react';
import PricingCard from '../../component/pricingCard/PricingCard';

const PricingOption = ({promisData}) => {
    const pricingList = use(promisData);
    // pricingList = data.pricing;
    console.log(pricingList);
    return (
        <div>
            <h1 className='text-5xl'>Get our Membership</h1>
            {
                pricingList.map(pricing => <PricingCard 
                    key={pricing.id}
                    pricing={pricing}>
                    </PricingCard>)
            }
        </div>
    );
};

export default PricingOption;