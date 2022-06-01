/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function StyleSelector({ selectedStyle, styles, setStyle }) {
  return (
    <div>
      <div>
        <b>Style {'>'}</b> {selectedStyle.name}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
      >
        {styles.map((style) => (
          style.style_id === selectedStyle.style_id
            ? (
              <div key={style.photos[0].thumbnail_url}>
                <i style={{ position: 'absolute' }}>✅</i>
                <img
                  alt="thumbnail"
                  src={style.photos[0].thumbnail_url}
                  width="50"
                  height="50"
                />
              </div>
            )
            : (
              <img
                alt="thumbnail"
                key={style.photos[0].thumbnail_url}
                onClick={() => setStyle(style)}
                src={style.photos[0].thumbnail_url}
                width="50"
                height="50"
              />
            )))}
      </div>
    </div>
  );
}

export default StyleSelector;
