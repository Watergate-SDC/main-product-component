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
    }
}

module.exports = controller;