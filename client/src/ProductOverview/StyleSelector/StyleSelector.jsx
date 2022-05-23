import React from 'react';

export default function StyleSelector({name, styles, setStyle}) {

  return (
    <div>
      <div>
        <b>Style ></b> {name}
      </div>
      <select onChange={(e) => setStyle(styles[e.target.value])}>
        {styles.map((style, index) => (
          <option value={index} key={style.style_id}>{style.name}</option>
        ))}
      </select>
      {/* {styles.map(({photos}) => (
        <img style={{clipPath: 'circle(100px at center)'}} src={photos[0].thumbnail_url} width='300'></img>
      ))} */}
    </div>
  )
}