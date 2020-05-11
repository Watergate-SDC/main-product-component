const helper = require('../database/dbHelpers.js');

const controller = {
    getAll: (req, res) => {
        helper.getAll((err, results) => {
            err ? res.status(404).send(err) : res.status(200).json(results);
        })
    },
    getOne: (req, res) => {
        let {id} = req.params;
        helper.getOne(id, (err, results) => {
            err ? res.status(404).send(err) : res.status(200).json(results);
        })
    },
    getCartInfo: (req, res) => {
        helper.getTotalPrice((err, results) => {
            err ? res.status(404).send(err) : res.status(200).json(results);
        })
    },
    addToCart: (req, res) => {
        let {price} = req.body;
        helper.addToCart(price, (err, results) => {
            err ? res.status(404).send('Unable to add to cart') : res.status(200).send('Product added to cart.');
        })

    }
}

module.exports = controller;