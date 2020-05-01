const db = require('./index.js');

module.exports = {
    get: (callback) => {
        let queryStr = 'SELECT * FROM products;';
        db.query(queryStr, (err, results) => {
            err ? callback(err) : callback(null, results);
        })
    },

};