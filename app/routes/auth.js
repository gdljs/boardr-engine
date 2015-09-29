'use strict';

var express  = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/api/auth', router);

};

router.post('/login', function (req, res) {
  res.status(200).send({api_version: "0.0.1 login"});
});

router.post('/signup', function (req, res) {
  res.status(200).send({api_version: "0.0.1 signup"});
});
