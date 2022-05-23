const express = require('express');
const path = require('path');
require('dotenv').config()
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/products/', (req, res)=> {
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.product_id}`
  axios.get(url,
    {
      method: 'GET',
      headers: {
        Authorization: process.env.AUTHORIZATION
      }
    })
    .then((response) => {
      // console.log('data receieved response: ', response);
      res.send(JSON.stringify(response.data))
    })
  })

  app.get('/products/related', (req, res)=> {
    let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.product_id}/related`
    // console.log(url);
    axios.get(url,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.AUTHORIZATION
        }
      })
      .then((response) => {
        // console.log('data receieved response: ', response);
        res.send(JSON.stringify(response.data))
      })
    })



    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });