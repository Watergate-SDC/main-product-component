const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/')
    .get(controller.get);
// router
    // .route('/')

// add to cart
// post

module.exports = router;
