import React, {useState, useEffect} from 'react';
import Carousel, {CarouselItem} from './Carousel.jsx';

export default function ImageGallery({photos}) {
  const [viewPhoto, setViewPhoto] = useState(null)

  useEffect(() => {
    if (photos[0] !== undefined) {
      setViewPhoto(photos[0])
    }
  }, [photos])

  const thumbnails = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    margin: '5px'
  }

  const viewStyle = {
    height: '800px',
    width: '800px',
    overflow: 'hidden'
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={viewStyle}>
        {viewPhoto === null ? '' :
        (<img src={viewPhoto.url}></img>)}
      </div>
      <div style={thumbnails}>
        {photos.map(photo => (
          <img
            style={{border: '2px white solid'}}
            key={photo.thumbnail_url}
            src={photo.thumbnail_url}
            onClick={() => setViewPhoto(photo)}
            width='100'
            height='100'
          ></img>
        ))}
      </div>

      {/* <Carousel>
        {photos.map((photo, index) => (
          <CarouselItem photo={photo}>Item {index}</CarouselItem>
        ))}
      </Carousel> */}
    </div>
  )
}