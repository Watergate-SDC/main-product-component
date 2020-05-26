const Cart = require('../database/schema.js')


const controller = {
  getOne:(req, res) => {
      let db = req.app.locals.db;
      let rando = Math.floor(Math.random() * 10000000) // variable to use to test between 1 - 10,000,000
      let id = Math.floor(Math.random() * 1000000) + 9000000 // generates id number within last 10% of database
    db.collection("luluProducts").find({id: id}).sort({id: -1}).toArray()
      .then(data => {
        console.log(`querying for id: ${id}`)
        // console.log(`querying for id: ${rando}`)
        res.status(200).send(data)
      })
      .catch(err => res.status(400).send(err))
    },

  addToCart: (req, res) => {
      let {price} = req.body
      Cart.create({price: price})
      .then(data =>
      res.status(200).send(data)
      )
      .catch(err => res.status(400).send(err))
    },

  getCartInfo: (req, res) => {
      Cart.find({})
      .then(results => {

        let information = {
          subtotal: 0,
          totalItems: 0
        };

        for (let i = 0; i < results.length; i++) {
          information.subtotal += results[i].price;
          information.totalItems += 1;
        };
        res.status(200).send(information)
      })
      .catch(err => res.status(400).send(err))
    }
};

module.exports = controller;

// module.exports = {
//   addToCart: (price, callback) => {
//     let queryStr = `INSERT INTO cart (price) VALUES (${price});`;
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   deleteCart: (callback) => {
//     let queryStr = 'TRUNCATE TABLE cart;';
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   }
// };