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

router.post('/', (req, res) => {
    const carData = req.body;

    db('car-dealer')
        .insert(carData, 'id')
        .then(ids => {
            res.status(200).json(ids);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.put('/:id', (req, res) => {
    db('car-dealer')
        .where({ id: req.params.id })
        .update(req.body)
        .then(count => {
            res.status(200).json(count);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.delete('/:id', (req, res) => {
    db('car-dealer')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json(count);
        })
        .catch(error => {
            res.status(500).json(count);
        });
});

module.exports = router;

