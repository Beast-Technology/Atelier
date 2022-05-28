import React, {useState, useEffect} from 'react';
// import Carousel, {CarouselItem} from './Carousel.jsx';

const thumbnails = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  margin: '5px'
}

const viewStyle = {
  height: '600px',
  width: '600px',
  overflow: 'hidden'
}

export default function ImageGallery({photos}) {
  console.log(photos);
  const [viewPhoto, setViewPhoto] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos[0] !== undefined) {
      setViewPhoto(photos[index]);
    }
  }, [index, photos]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={viewStyle}>
        {viewPhoto === null ? ''
          : (
            <img
              alt="style picutre"
              src={viewPhoto.url
                ? viewPhoto.url
                : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'}
            />
          )}
      </div>
      <div style={thumbnails}>
        {photos.map((photo, i) => {
          return index === i ?
            (
              <img
                  style={{border: '4px green solid'}}
                  key={photo.thumbnail_url}
                  src={photo.thumbnail_url}
                  onClick={() => {
                    setIndex(i);
                  }}
                  width='50'
                  height='50'
              ></img>
            )
            : (
                <img
                  style={{border: '2px white solid'}}
                  key={photo.thumbnail_url}
                  src={photo.thumbnail_url}
                  onClick={() => {
                    setIndex(i);
                  }}
                  width='50'
                  height='50'
                ></img>
            )
        } )}
      </div>

      {/* <Carousel>
        {photos.map((photo, index) => (
          <CarouselItem photo={photo}>Item {index}</CarouselItem>
        ))}
      </Carousel> */}
    </div>
  )
}