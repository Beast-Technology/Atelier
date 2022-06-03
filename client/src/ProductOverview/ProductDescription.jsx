import React from 'react';

export default function ProductDescription({ product }) {
  const { slogan, description, features } = product;

  return (
    <div className="product-description">

      <div style={{
        borderRight: '2px solid black',
        paddingRight: '20px',
      }}
      >
        <h2 className="heading heading-secondary description-slogan">{slogan}</h2>
        <p className="description-text">{description}</p>
      </div>

      <div className="feature-box">
        <h2 className="heading heading-secondary">Features</h2>
        <ul style={{
          padding: '0px',
          listStyleType: 'none',
        }}
        >
          {features ? features.map((feature) => (
            <li key={feature.feature}><span>{feature.feature}</span> <span className="feature-text">{feature.value}</span></li>
          )) : ''}
        </ul>
      </div>
    </div>
  );
}
