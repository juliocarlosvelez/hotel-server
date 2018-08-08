'use strict';

const express = require('express');
const router = express.Router();

const Apartment = require('../models/apartment');

router.get('/', (req, res, next) => {
  Apartment.find()
    .then((apartment) => {
      if (!apartment) {
        return res.status(404).json({code: 'not-found'});
      } else {
        return res.json(apartment);
      }
    })
    .catch(next);
});

router.post('/specific', (req, res, next) => {
  const apartment = req.body.apartment;
  Apartment.findOne({ name: apartment })
    .then((oneApartment) => {
      if (oneApartment) {
        return res.json(apartment);
      }
    })
    .catch(next);
});

module.exports = router;
