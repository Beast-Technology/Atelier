const controllers = require('./controllers/');
const router = require('express').Router();

// -- Overview -- //
router.get('/reviews', controllers.overview.overview);
router.get('/products/:product_id', controllers.overview.products);
router.get('/products/:product_id/styles', controllers.overview.styles);

// -- Related Items -- //
router.get('/products/:product_id/related', controllers.relatedItems.related);


module.exports = router;





