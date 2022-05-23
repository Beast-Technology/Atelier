const controllers = require('./controllers/');
const router = require('express').Router();

router.get('/reviews', controllers.overview.overview);
router.get('/products/:product_id', controllers.overview.products);
router.get('/products/:prduct_id/styles', controllers.overview.styles);

module.exports = router;