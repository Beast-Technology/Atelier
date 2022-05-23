require("dotenv").config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const { TOKEN } = process.env;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/reviews', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', {
    headers: {
      Authorization: TOKEN,
    },
    params: {
      page: req.query.page,
      count: req.query.count,
      product_id: req.query.product_id,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => { res.status(404).send(err); });
});

app.get('/reviews/meta', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
    headers: {
      Authorization: TOKEN,
    },
    params: {
      product_id: req.query.product_id,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => { res.status(404).send(err); })
})

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
