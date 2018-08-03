'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;


Reservations model

```
startdate: string // required
enddate: string // required
apartment: objectid // required
totalPrice
user
status
reservation code

```
Apartments model

```
name: string // required
rooms: string // required
capacity: string // required
price: number // required

```