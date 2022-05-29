import React from 'react';
import AnswerPhotoGalleryImage from './AnswerPhotoGalleryImage.jsx'

export default function AnswerPhotoGallery({ urls, setphotoModalURL }) {
  return (
    <div className="photo-gallery">
      {urls.map((url, index) => <AnswerPhotoGalleryImage url={url} key={index} setphotoModalURL={setphotoModalURL} />)}
    </div>
  );
}
