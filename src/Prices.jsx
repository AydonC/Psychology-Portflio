import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false); 

  
  const pricingData = [
    {
      title: 'Individual Therapy',
      monthlyPrice: 'R500 /pm',
      yearlyPrice: 'R350 /pm' ,
      features: ['1 session per week (45 minutes)', 'Personalized treatment plan', 'Email support between sessions','Access to mindfulness exercises','Confidentiality guaranteed'],
      isHighlighted: true,
      
    },
    {
      title: ' Couples Plan',
      monthlyPrice: 'R800 /pm',
      yearlyPrice: 'R650 /pm',
      features: ['1 session per week (75 minutes)', 'Education for partners on PTSD and its impact', 'Communication strategies to rebuild trust', 'Exercises to improve emotional intimacy','Joint strategies for managing triggers and stress'],
      isHighlighted: true,
    },
    {
      title: 'Corporate Wellness',
      monthlyPrice: 'R1100 /pm',
      yearlyPrice: 'R950 /pm',
      features: ['Up to 5 group sessions per month', 'Mental health workshops', 'PTSD management training','Employee wellness assessments','Custom mental health reports'],
      isHighlighted: true,
    },
  ];

  return (
    <div className="pricing-container">
    
      <header className="pricing-header">
        <h1>Pricing</h1>
        <p>Choose the best plan for your needs.</p>
        <div className="pricing-toggle">
          <button
            className={!isYearly ? 'active' : ''}
            onClick={() => setIsYearly(false)}
          >
            6 Months
          </button>
          <button
            className={isYearly ? 'active' : ''}
            onClick={() => setIsYearly(true)}
          >
            12 Months
          </button>
        </div>
      </header>

     
      <div className="pricing-cards">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            features={plan.features}
            isHighlighted={plan.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features, isHighlighted }) => (
  <div className={`pricing-card ${isHighlighted ? 'highlighted' : ''}`}>
    <h3>{title}</h3>
    <p className="price">{price}</p>
    <ul className='list' style={{listStyleType:'disc',textAlign:'left'}}>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
   
  </div>
);

export default Pricing;
