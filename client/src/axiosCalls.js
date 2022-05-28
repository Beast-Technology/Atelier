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

export {
  getMeta, getProduct, getStyles, getRelated,
};
