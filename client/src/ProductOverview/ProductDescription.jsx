import React from 'react';

export default function ProductDescription({ product }) {
  const { slogan, description, features } = product;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
    }}
    >

      <div style={{
        borderRight: '2px solid black',
        paddingRight: '20px',
      }}
      >
        <h2>{slogan}</h2>
        <div>{description}</div>
      </div>

      <div style={{ paddingLeft: '20px' }}>
        <h2>Features</h2>
        <ul style={{
          padding: '0px',
          listStyleType: 'none',
        }}
        >
          {features ? features.map((feature) => (
            <li key={feature.feature}><b>{feature.feature}</b>: {feature.value}</li>
          )) : ''}
        </ul>
      </div>
    </div>
  );
}
