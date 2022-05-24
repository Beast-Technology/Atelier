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
    border: '2px blue solid'
  }

  return (
    <div>
      {viewPhoto === null ? '' : (<img width='400' src={viewPhoto.url}></img>)}
      <div style={thumbnails}>
        {photos.map(photo => (
          <img src={photo.thumbnail_url}></img>
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