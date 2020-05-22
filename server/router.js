const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/all')
  // gets all 100 product info
  .get(controller.getAll);
  
router
  .route('/cart')
  // gets subtotal of cart
  .get(controller.getCartInfo)
  // adds a product to cart
  .post(controller.addToCart)
  // deletes entire cart
  .delete(controller.deleteCart);

router
  .route('/:id')
  // gets one product info
  .get(controller.getOne)
  .delete(controller.deleteProduct)
  .put(controller.updateProduct);

router
  .route('/create')
  .post(controller.addProduct);

module.exports = router;
