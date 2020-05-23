// const helper = require('../database/dbHelpers.js');
var mongoose = require('mongoose');
var connection = mongoose.connection;
var mongoUri = 'mongodb://localhost/SDC';

const controller = {
  getOne: (req, res) => {
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, function() {
      connection.db.collection("luluProducts", function(err, collection){
          collection.findOne({id: 999}, function(err, data){
            if(err) {
            res.status(400).send(err)
            }
            res.status(200).send(data);
        })
      });
    })
  }
  // getOne: (req, res) => {
  //   helper.findOne()
  //   .then(data => {
  //     res.status(200).send(data)
  //   })
  //   .catch(error => {
  //     res.status(400).send(error);
  //   });
  // }
  // getAll: (req, res) => {
  //   helper.getAll((err, results) => {
  //     err ? res.status(404).send(err) : res.status(200).json(results);
  //   });
  // },
  // getOne: (req, res) => {
  //   let {id} = req.params;
  //   helper.getOne(id, (err, results) => {
  //     err ? res.status(404).send(err) : res.status(200).json(results);
  //   });
  // },
  // deleteProduct: (req, res) => {
  //   let {id} = req.params;
  //   helper.deleteProduct(id, (err, results) => {
  //     err ? res.status(404).send(err) : res.status(200).json(results);
  //   })
  // },
  // addProduct: (req, res) => {
  //   helper.addProduct(req.body, (err, results) => {
  //     err ? res.status(404).send(err) : res.status(200).json(results);
  //   })
  // },
  // updateProduct: (req, res) => {
  //   let {id} = req.params
  //   helper.updateProduct(id, req.body, (err, results) => {
  //     err ? res.status(404).send(req.body) : res.status(200).send('Product added to cart.');
  //   });
  // },
  // getCartInfo: (req, res) => {
  //   helper.getCartInfo((err, results) => {
  //     err ? res.status(404).send(err) : res.status(200).json(results);
  //   });
  // },
  // addToCart: (req, res) => {
  //   let {price} = req.body;
  //   helper.addToCart(price, (err, results) => {
  //     err ? res.status(404).send('Unable to add to cart') : res.status(200).send('Product added to cart.');
  //   });
  // },
  // deleteCart: (req, res) => {
  //   helper.deleteCart((err, results) => {
  //     err ? res.status(404).send('Unable to clear cart') : res.status(200).send('Cart has been cleared');
  //   });
  // }
};

module.exports = controller;