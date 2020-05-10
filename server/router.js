const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/')
    .get(controller.getAll);

router
    .route('/:id')
    .get(controller.getOne);

// add to cart
// post

module.exports = router;
