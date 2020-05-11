const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/products')
    // gets all 100 product info
    .get(controller.getAll)
    
router
    .route('/cart')
    // gets subtotal of cart
    .get(controller.getCartInfo)
    // adds a product to cart
    .post(controller.addToCart);
router
    .route('/:id')
    // gets one product info
    .get(controller.getOne);
    

// add to cart
// post

module.exports = router;
