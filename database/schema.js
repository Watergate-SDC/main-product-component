// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// var connection = mongoose.connection;
// var mongoUri = 'mongodb://localhost/SDC';
// mongoose.connect(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }, function() {
//   connection.db.collection("luluProducts", function(err, collection){
//       collection.findOne({id: 999}, function(err, data){
//         console.log("logging from schema.js", data); // it will print your collection data
//     })
//   });
// });



// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open');

// let productSchema = new Schema({
//   id: {type: Number, },
//   name: {type: String, },
//   sex: {type: String, },
//   price: {type: Number, },
//   reviews: {type: Number, },
//   design: {type: String, },
//   fabric: {type: String, },
//   fit: {type: String, },
//   color1: {type: String, },
//   color2: {type: String, },
//   colorId1: {type: String, },
//   colorId2: {type: String, },
//   type: {type: String, },
//   img1: {type: String, },
//   img2: {type: String, },
//   img3: {type: String, },
//   img4: {type: String, },
// });

// let luluProducts = mongoose.model('luluProducts', productSchema);

// let cartSchema = new Schema({
//     id: {type: Number},
//     price: {type: Number}
// })

// let Cart = mongoose.model('Cart', cartSchema);
// // module.exports = {
// //     luluProducts: luluProducts,
// //     Cart: Cart
// // }

// module.exports = luluProducts;