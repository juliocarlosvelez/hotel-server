'use strict';

const express = require('express');
const router = express.Router();

const Booking = require('../models/booking');
const User = require('../models/user');
const Apartment = require('../models/apartment');

router.post('/', (req, res, next) => {
  const checkIn = req.body.checkIn;
  const checkOut = req.body.checkOut;
  const apartment = req.body.apartment;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  let totalPrice = 0;
  let bookingCode = Math.floor(Math.random() * Math.floor(1000000));

  // Check if there is a user with that email already exists
  // if yes, retrieve id
  // if no, create new user
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return user;
      }
      const newUser = User({
        firstName,
        lastName,
        email
      });
      return newUser.save();
    })
    .then((user) => {
      return Apartment.findOne({ name: apartment })
        .then((oneApartment) => {
          if (oneApartment) {
            totalPrice = oneApartment.nightlyprice;
          }

          const newBooking = Booking({
            checkIn,
            checkOut,
            apartment,
            totalPrice,
            user: user._id,
            bookingCode
          });

          return newBooking.save()
            .then((data) => {
              res.status(204).json({ code: 'booking-created' });
            });
        });
    })
    .catch(next);

  // Create newBooking variable
  // Add the userid to the newBooking
  // Add active to the newBooking
  // Generate Booking code
  // Add the booking code to the newBooking
  // Save the new booking
});

module.exports = router;
