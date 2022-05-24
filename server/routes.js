const controllers = require('./controllers/');
const router = require('express').Router();

// -- Overview -- //
router.get('/reviews', controllers.overview.overview);
router.get('/products/:product_id', controllers.overview.products);
router.get('/products/:product_id/styles', controllers.overview.styles);

// -- Related Items -- //
router.get('/products/:product_id/related', controllers.relatedItems.related);

// -- Questions and Answers -- //
router.get('/qa/questions', controllers.qanda.questions);
router.put('/qa/questions/:question_id/helpful', controllers.qanda.setQHelpful);
router.put('/qa/answers/:answer_id/helpful', controllers.qanda.setAHelpful);

// -- Ratings and Reviews -- //
router.get('/reviews/page/count/product_id', controllers.reviews.data);
router.get('/reviews/meta/product_id', controllers.reviews.meta);


module.exports = router;





