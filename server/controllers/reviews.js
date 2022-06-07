const axios = require('axios');
require("dotenv").config();

const {API_URL, TOKEN} = process.env;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = TOKEN;

module.exports = {
  data: (req, res) => {
    const config = {
      params: {
        product_id: req.query.product_id,
        sort: req.query.sort,
        count: req.query.count,
      },
    };

    axios.get(req.originalUrl, config)
      .then(response => {
        res.send(response.data.results);
      })
      .catch(err => {
        res.send(err);
      });
  },
  meta: (req, res) => {
    axios.get(req.originalUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      })
  }
}