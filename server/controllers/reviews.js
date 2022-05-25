const axios = require('axios');
require("dotenv").config();

const {API_URL, TOKEN} = process.env;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = TOKEN;

module.exports = {
  data: (req, res) => {
    axios.get(req.originalUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      })
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

// app.get('/reviews', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', {
//     headers: {
//       Authorization: TOKEN,
//     },
//     params: {
//       page: req.query.page,
//       count: req.query.count,
//       product_id: req.query.product_id,
//     },
//   })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => { res.status(404).send(err); });
// });

// app.get('/reviews/meta', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
//     headers: {
//       Authorization: TOKEN,
//     },
//     params: {
//       product_id: req.query.product_id,
//     },
//   })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => { res.status(404).send(err); })
// })