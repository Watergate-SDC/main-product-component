
// var mongoose = require('mongoose');
// var connection = mongoose.connection;
// var mongoUri = 'mongodb://localhost/SDC';
// let luluProducts = require('./schema.js')
// let Cart = require('./schema.js')

// commented out when dbhelper was moved into controller.js
// module.exports = {
//   findOne: () => ( mongoose.connect(mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }, function() {
//     connection.db.collection("luluProducts", function(err, collection){
//         collection.findOne({id: 999}, function(err, data){
//           console.log("logging from schema.js", data); // it will print your collection data
//       })
//     });
//   })
//   )
// }


// module.exports = {
//   findOne: () => { 
//     luluProducts.create({"id": 11111111, "name": 'test'}, ()=> {
//       return luluProducts.find({"id": 11111111}, (err, data) => {
//         if (err){
//           console.log(err)
//         }
//         console.log("consologging data from find", data)
//       })
//     })
//   }
// }
// =============================================MongoDB CODE===========================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================



// var MongoClient = require('mongodb').MongoClient;
// var mongoUri = 'mongodb://localhost/SDC';
// // let db = mongoose.connect(mongoUri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// MongoClient.connect("mongodb://localhost:27017", (err, client)  => {
//   if (!err) {
//     console.log("connected to MongoDB")
//   }
//   let database = client.db('SDC')
//   database.collection('luluProducts').find({id: 10000000})
//     .toArray((err, results) => {
//         if(err) throw err;

//         console.log(results)
//     })
// })

// let luluProducts = require('./schema.js')
// // let Cart = require('./schema.js')

// // module.exports = {
// //   findOne: () => db.collection('luluProducts', function(err, coll))
// // }



// =============================================ANNA'S MYSQL CODE===========================================
// =========================================================================================================
// =========================================================================================================
// =========================================================================================================

// const db = require('./index.js');

// module.exports = {
//   getAll: (callback) => {
//     let queryStr = 'SELECT * FROM products';
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   getOne: (id, callback) => {
//     let queryStr = `SELECT * FROM products WHERE id=${id};`;
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   deleteProduct: (id, callback) => {
//     let queryStr = `DELETE FROM products WHERE id=${id};`;
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   addProduct: (data, callback) => {
//     let {name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4} = data[0]
//     let queryStr = `INSERT INTO products (name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4) VALUES('${name}', '${sex}', ${price}, ${reviews}, '${design}', '${fabric}', '${fit}', '${color1}', '${color2}', '${colorId1}', '${colorId2}', '${type}', '${img1}', '${img2}', '${img3}', '${img4}');`;
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   updateProduct: (id, data, callback) => {
//     let {name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4} = data[0]
//     let queryStr = `INSERT INTO products (name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4) VALUES('${name}', '${sex}', ${price}, ${reviews}, '${design}', '${fabric}', '${fit}', '${color1}', '${color2}', '${colorId1}', '${colorId2}', '${type}', '${img1}', '${img2}', '${img3}', '${img4}');`;
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   getCartInfo: (callback) => {
//     let queryStr = 'SELECT * FROM cart;';
//     db.query(queryStr, (err, results) => {
//       if (err) {
//         callback(err);
//       } else { 
//         let information = {
//           subtotal: 0,
//           totalItems: 0
//         };
//         // results is an array 
//         for (let i = 0; i < results.length; i++) {
//           information.subtotal += results[i].price;
//           information.totalItems += 1;
//         }
//         callback(null, information);
//       }
//     });
//   },
//   addToCart: (price, callback) => {
//     let queryStr = `INSERT INTO cart (price) VALUES (${price});`;
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   },
//   deleteCart: (callback) => {
//     let queryStr = 'TRUNCATE TABLE cart;'; // TRUNCATE = DROP
//     db.query(queryStr, (err, results) => {
//       err ? callback(err) : callback(null, results);
//     });
//   }
// };