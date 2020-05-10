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
    }
};