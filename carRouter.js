const express = require('express');

const router = express.Router();

const db = require('./dbConfig');

router.get('/', (req, res) => {
    db('car-dealer')
        .then(carDealer => {
            res.status(200).json(carDealer);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('car-dealer').where({ id })
        .then(carDealerId => {
            res.status(200).json(carDealerId);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;

