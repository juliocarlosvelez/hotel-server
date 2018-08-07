'use strict';

require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const app = express();

// Require the routes //
const apartment = require('./routes/apartments');
const booking = require('./routes/bookings');

/* database */

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

/* middlewares */
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL]
}));

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* routes */
app.use('/apartments', apartment);
app.use('/bookings', booking);

/* Error Handling */

/* catch 404 and forward to error handler */

app.use((req, res, next) => {
  // throw new Error('I made an error');
  res.status(404).json({code: 'not found'});
});

app.use((err, req, res, next) => {
  /* always log the error */
  console.error('ERROR', req.method, req.path, err);

  /* only render if the error ocurred before sending the response */
  if (!res.headersSent) {
    res.status(500).json({code: 'unexpected'});
  }
});
module.exports = app;
