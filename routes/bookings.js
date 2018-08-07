// 'use strict';

// const express = require('express');
// const router = express.Router();

// const Booking = require('../models/booking');

// router.post('/book', (req, res, next) => {
//   if (req.session.currentUser) {
//     return res.status(401).json({code: 'unauthorized'});
//   }

//   const username = req.body.username;
//   const password = req.body.password;

//   if (!username || !password) {
//     return res.status(422).json({code: 'validation'});
//   }

//   Booking.findOne({username}, 'username')
//     .then((userExists) => {
//       if (userExists) {
//         return res.status(422).json({code: 'username-not-unique'});
//       }

//       const newUser = User({
//         username,
//         password: hashPass
//       });

//       return newUser.save()
//         .then(() => {
//           req.session.currentUser = newUser;
//           res.json(newUser);
//         });
//     })
//     .catch(next);
// });

// module.exports = router;
