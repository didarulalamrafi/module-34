import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    return (
        <div className="card">
            <h2> Name: {pricing.name}</h2>
            <p>${pricing.price}</p>
        </div>
    );
};

export default PricingCard;