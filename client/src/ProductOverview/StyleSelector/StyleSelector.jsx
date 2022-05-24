import React, {useEffect} from 'react';

export default function StyleSelector({selectedStyle, styles, setStyle}) {

  useEffect(() => {
    console.log('StyleSelector useEffect')
  }, [selectedStyle])

  return (
    <div>
      <div>
        <b>Style ></b> {selectedStyle.name}
      </div>
      {/* <select onChange={(e) => setStyle(styles[e.target.value])}>
        {styles.map((style, index) => (
          <option value={index} key={style.style_id}>{style.name}</option>
        ))}
      </select> */}
      <div style={{
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}>
        {styles.map((style, index) => {
          return style.style_id === selectedStyle.style_id ?
            (<>
              <span style={{position: 'absolute'}}>✅</span>
              <img
                src={style.photos[0].thumbnail_url}
                width='100'
                height='100'>
              </img>
            </>)
          : (
              <img
                onClick={() => setStyle(style)}
                src={style.photos[0].thumbnail_url}
                width='100'
                height='100'>
              </img>
            )
        })}
      </div>
    </div>
  )
}