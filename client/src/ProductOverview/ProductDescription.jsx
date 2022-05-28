import React from 'react';
import './ProductDescription.css';


export default function ProductDescription({product}) {
  const {slogan, description, features} = product;

  return (
    <div className='info-flex-container'>

      <div className='info-left-box'>
        <h2>{slogan}</h2>
        <div>{description}</div>
      </div>

      <div className='info-right-box'>
        <h2>Features</h2>
        <ul className='feature-list'>
          {features ? features.map((feature) => (
            <li key={feature.feature}><b>{feature.feature}</b>: {feature.value}</li>
          )) : ''}
        </ul>
      </div>
    </div>
  )
}