import React, { } from 'react';


function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID,
}) {
  function handleModal() {
    setShow(true);
  }
  function handleClickedItem(e, item) {
    e.stopPropagation()
    setClickedItem(item);
  }
  function handleClickedCard(item) {
    // console.log(item.id);

    setProductID(item.id);
  }

  // required accessibility feature (possible)
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      // console.log('enter press here! ');
      setProductID(relatedItem);
    }
  }
  return (

    <div
      onClick={() => { handleClickedCard(relatedItem); }}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
      className="RelatedProductsCard"
    >
      <img className="card-img" src="" alt="" />
      <button
        className="card-starButton"
        onClick={(e) => {
          handleModal();
          handleClickedItem(e, relatedItem);
        }}
        type="button"
      >
        ☆
      </button>
      <div className="card-category">{relatedItem.category}</div>
      <div className="card-name">{relatedItem.name}</div>
      <div className="card-price">
        $
        {parseInt(relatedItem.default_price, 10)}
      </div>
      <div className="card-stars">★★★★★</div>
    </div>
  );
}

export default RelatedProductsCard;

