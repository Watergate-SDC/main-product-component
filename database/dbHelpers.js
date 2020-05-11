const db = require('./index.js');

module.exports = {
    getAll: (callback) => {
        let queryStr = 'SELECT * FROM products';
        db.query(queryStr, (err, results) => {
            err ? callback(err) : callback(null, results);
        })
    },
    getOne: (id, callback) => {
        let queryStr = `SELECT * FROM products WHERE id=${id};`;
        db.query(queryStr, (err, results) => {
            err ? callback(err) : callback(null, results);
        })
    },
    getCartInfo: (callback) => {
        let queryStr = `SELECT * FROM cart;`;
        db.query(queryStr, (err, results) => {
            if (err) {
                callback(err)
            } else { 
                let information = {
                    subtotal: 0,
                    totalItems: 0
                }
                // results is an array 
                for (let i = 0; i < results.length; i++) {
                    information.subtotal += results[i].price;
                    information.totalItems += 1;
                }
                callback(null, information);
            }
        })
    },
    addToCart: (price, callback) => {
        let queryStr = `INSERT INTO cart (price) VALUES (${price});`;
        db.query(queryStr, (err, results) => {
            err ? callback(err) : callback(null, results);
        })
    },
    deleteCart: (callback) => {
        let queryStr = `TRUNCATE TABLE cart;`;
        db.query(queryStr, (err, results) => {
            err ? callback(err) : callback(null, results);
        })
    }
};