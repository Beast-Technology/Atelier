import React, {useEffect} from 'react';

function StyleSelector({selectedStyle, styles, setStyle}) {

  return (
    <div>
      <div>
        <b>Style ></b> {selectedStyle.name}
      </div>
      <div style={{
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}>
        {styles.map((style, index) => {
          return style.style_id === selectedStyle.style_id ?
            (<div>
              <i style={{position: 'absolute'}}>✅</i>
              <img
                key={index}
                src={style.photos[0].thumbnail_url}
                width='50'
                height='50'>
              </img>
            </div>)
          : (
              <img
              key={index}
                onClick={() => setStyle(style)}
                src={style.photos[0].thumbnail_url}
                width='50'
                height='50'>
              </img>
            )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;