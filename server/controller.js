const helper = require('../database/dbHelpers.js');

const controller = {
    get: (req, res) => {
        helper.get((err, results) => {
            err ? res.status(404).send(err) : res.status(200).json(results);
        })
    }
}

module.exports = controller;