import axios from 'axios';



// --------------------- get/set information for a single product- API call ------------------- //


function getProduct(productID, setProduct) {
  axios.request({
    url: `/products/${productID}`,
    method: 'get',
  })
    .then((response) => {
      setProduct(response.data);
    });
}
// --------------------- get/set default style and styles for a single product - API call ------------------- //

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

// --------------------- get/set metadata for single a product- API call ------------------- //

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
// --------------------- get/set related items for a single product API call ------------------- //

function getRelated(productID, setRelatedItems) {
  const localRelateditems = JSON.parse(sessionStorage.getItem('ls_relatedItems')) || {};
  axios.request({
    url: `/products/${productID}/related`,
    method: 'get',
  })
    .then((response) => {
      const uniqueResponse = [...new Set(response.data)];

      const responseArray = [];
      const requestArray = [];

      uniqueResponse.forEach((uniqueRelatedItemID) => {
        if (localRelateditems[uniqueRelatedItemID]) {
          responseArray.push(localRelateditems[uniqueRelatedItemID]);
        } else {
          requestArray.push(uniqueRelatedItemID);
        }
      });
      if (requestArray.length !== 0) {
        const array = requestArray.map((relatedItemId) => axios.request({
          url: `/products/${relatedItemId}`,
          method: 'get',
        })
          .then((result) => result.data));
        Promise.all(array)
          .then((values) => {
            responseArray.push(...values);
            setRelatedItems(responseArray);
          });
      } else {
        setRelatedItems(responseArray);
      }
    });
}

export {
  getMeta, getProduct, getStyles, getRelated,
};
