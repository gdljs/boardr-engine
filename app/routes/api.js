'use strict';

var express  = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/api', router);

};

router.get('/', function (req, res) {
  res.status(200).send({api_version: "0.0.1"});
});
