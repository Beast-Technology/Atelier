import ObjToRating from './ObjToRating.js';


function setPhotoObjectCard(photoObject, yourOutfitItem, setPhotoSrc) {
  if ((Object.keys(photoObject).length !== 0) && (photoObject[yourOutfitItem.id] !== undefined)) {
    const photoURL = photoObject[yourOutfitItem.id][0].thumbnail_url;
    if (photoURL !== null) {
      setPhotoSrc(() => photoURL);
    } else {
      setPhotoSrc(() => 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png');
    }
  }
}


function setMetaObjectCard(metaObject, yourOutfitItem, setRating) {
  if ((Object.keys(metaObject).length !== 0) && (metaObject[yourOutfitItem.id] !== undefined)) {
    setRating(ObjToRating(metaObject[yourOutfitItem.id]));
  }
}

export { setPhotoObjectCard, setMetaObjectCard };
