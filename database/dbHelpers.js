const db = require('./index.js');

module.exports = {
  getAll: (callback) => {
    let queryStr = 'SELECT * FROM products';
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  },
  getOne: (id, callback) => {
    let queryStr = `SELECT * FROM products WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  },
  deleteProduct: (id, callback) => {
    let queryStr = `DELETE FROM products WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  },
  addProduct: (data, callback) => {
    let {name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4} = data[0]
    let queryStr = `INSERT INTO products (name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4) VALUES('${name}', '${sex}', ${price}, ${reviews}, '${design}', '${fabric}', '${fit}', '${color1}', '${color2}', '${colorId1}', '${colorId2}', '${type}', '${img1}', '${img2}', '${img3}', '${img4}');`;
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  },
  updateProduct: (id, data, callback) => {
    let {name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4} = data[0]
    let queryStr = `INSERT INTO products (name, sex, price, reviews, design, fabric, fit, color1, color2, colorId1, colorId2, type, img1, img2, img3, img4) VALUES('${name}', '${sex}', ${price}, ${reviews}, '${design}', '${fabric}', '${fit}', '${color1}', '${color2}', '${colorId1}', '${colorId2}', '${type}', '${img1}', '${img2}', '${img3}', '${img4}');`;
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  },
  getCartInfo: (callback) => {
    let queryStr = 'SELECT * FROM cart;';
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else { 
        let information = {
          subtotal: 0,
          totalItems: 0
        };
        // results is an array 
        for (let i = 0; i < results.length; i++) {
          information.subtotal += results[i].price;
          information.totalItems += 1;
        }
        callback(null, information);
      }
    });
  },
  addToCart: (price, callback) => {
    let queryStr = `INSERT INTO cart (price) VALUES (${price});`;
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  },
  deleteCart: (callback) => {
    let queryStr = 'TRUNCATE TABLE cart;'; // TRUNCATE = DROP
    db.query(queryStr, (err, results) => {
      err ? callback(err) : callback(null, results);
    });
  }
};