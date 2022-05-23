const controllers = require('./controllers');
const router = require('express').Router();

router.get('/reviews', controllers.reviews.get);
router.get('/products/:product_id', controllers.products.get);
router.get('/products/:prduct_id/styles', controllers.styles.get);

module.exports = router;