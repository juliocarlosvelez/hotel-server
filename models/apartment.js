'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  nightlyprice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
