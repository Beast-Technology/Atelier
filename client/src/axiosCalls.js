import axios from 'axios';

function getMeta(productID, setMeta) {
  axios.get('/reviews/meta', {
    params: {
      product_id: productID,
    },
  })
    .then((res) => {
      const { ratings } = res.data;
      let sum = 0;
      let total = 0;
      Object.keys(ratings).forEach((rating) => {
        sum += (parseInt(rating, 10) * parseInt(ratings[rating], 10));
        total += parseInt(ratings[rating], 10);
      });
      setMeta((sum / total).toFixed(2));
    });
}

function getProduct(productID, setProduct) {
  axios.request({
    url: `/products/${productID}`,
    method: 'get',
  })
    .then((response) => {
      setProduct(response.data);
    });
}

function getStyles(productID, setStyle, setStyles) {
  axios.request({
    url: `/products/${productID}/styles`,
    method: 'get',
  })
    .then((response) => {
      let defaultStyle = response.data.results.find((style) => style['default?']);
      if (defaultStyle === undefined) {
        [defaultStyle] = response.data.results;
      }
      setStyle(defaultStyle);
      setStyles(response.data.results);
    });
}

function getRelated(productID, setRelatedItems) {
  axios.request({
    url: `/products/${productID}/related`,
    method: 'get',
  })
    .then((response) => {
      const array = response.data.map((relatedItemId) => axios.request({
        url: `/products/${relatedItemId}`,
        method: 'get',
      })
        .then((result) => result.data));
      Promise.all(array)
        .then((values) => {
          const filteredArray = [];
          const responseArray = [];
          // some related items are repeating within data, below is a filter to only show unique values.
          values.forEach((reitems) => {
            if ((filteredArray.indexOf(reitems.id) < 0) && (reitems.id !== productID)) {
              filteredArray.push(reitems.id);
              responseArray.push(reitems);
            }
          });

          setRelatedItems(responseArray);
        });
    });
}

function getPhotosAndMetaForCards(allCardsArray, setPhotos, setMeta) {
  const photosPromiseArray = [];
  const metaPromiseArray = [];

  allCardsArray.forEach((allCardsProduct) => {
    const styleID = allCardsProduct.id;
    photosPromiseArray.push(
      axios.request({
        url: `/products/${styleID}/styles`,
        method: 'GET',
      }),
    );
    metaPromiseArray.push(
      axios.get('/reviews/meta', {
        params: {
          product_id: styleID,
        },
      }),
    );
  });
  Promise.all(photosPromiseArray)
    .then((responses) => {
      const responseObj = {};
      responses.forEach((styleItems) => {
        const styleItemResultsArray = styleItems.data.results;
        // console.log('styleItemResultsArray', styleItemResultsArray);
        for (let i = 0; i < styleItemResultsArray.length; i += 1) {
          if (i === styleItemResultsArray.length - 1) {
            responseObj[styleItems.data.product_id] = styleItemResultsArray[i].photos;
          } else if (styleItemResultsArray[i]['default?'] === true) {
            responseObj[styleItems.data.product_id] = styleItemResultsArray[i].photos;
          }
        }
      });
      setPhotos(responseObj);
    });
  Promise.all(metaPromiseArray)
    .then((responses) => {
      const responseObj = {};
      responses.forEach((styleItems) => {
        responseObj[styleItems.data.product_id] = styleItems.data;
      });
      setMeta(responseObj);
    });
}




export {
  getMeta, getProduct, getStyles, getRelated, getPhotosAndMetaForCards,
};
