'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const bookingSchema = new Schema({
  startdate: {
    type: Date,
    required: true
  },
  enddate: {
    type: Date,
    required: true
  },
  apartment: {
    type: ObjectId,
    ref: 'Apartment',
    required: true
  },
  totalprice: {
    type: Number,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  bookingcode: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
