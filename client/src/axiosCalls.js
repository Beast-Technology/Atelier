import axios from 'axios';

function getMeta(productID, setMeta) {
  axios.get('/reviews/meta', {
    params: {
      product_id: productID,
    },
  })
    .then((res) => {
      // console.log(res.data);
      setMeta(res.data);
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
      setStyle(response.data.results.find((styleId) => styleId['default?']));
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
          setRelatedItems(values);
        });
    });
}

export { getMeta, getProduct, getStyles, getRelated };
